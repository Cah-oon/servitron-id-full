type Props = { searchParams: { brand?: string, type?: string, q?: string } }

export default async function FirmwarePage({ searchParams }: Props) {
  const brand = searchParams?.brand || ""
  const type = searchParams?.type || ""
  const q = searchParams?.q || ""

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  let url = `${supabaseUrl}/rest/v1/firmwares?select=*&order=created_at.desc`
  if (brand) url += `&brand=eq.${encodeURIComponent(brand)}`
  if (type) url += `&type=eq.${encodeURIComponent(type)}`
  if (q) url += `&model=ilike.%${encodeURIComponent(q)}%`

  let data: any[] = []
  try {
    const res = await fetch(url, {
      headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
      cache: "no-store"
    })
    data = await res.json()
    if (!Array.isArray(data)) data = []
  } catch (e) {
    data = []
  }

  const brands = ["Polytron","LG","Samsung","Sharp","TCL","Hisense","Coocaa","Philips","Aqua","Changhong"]

  return (
    <div style={{background:"#050A14",minHeight:"100vh",color:"#fff",fontFamily:"sans-serif"}}>
      <div style={{height:56,background:"#080D1A",borderBottom:"1px solid #1a2336",display:"flex",alignItems:"center",padding:"0 16px",gap:10,position:"sticky",top:0,zIndex:10}}>
        <a href="/" style={{color:"#fff",textDecoration:"none",fontWeight:900}}>SERVITRON.ID</a>
        <span style={{color:"#444"}}>/</span>
        <span style={{color:"#0A84FF",fontWeight:700,fontSize:13}}>FIRMWARE</span>
      </div>

      <div style={{padding:16,maxWidth:1000,margin:"0 auto"}}>
        <h1 style={{fontSize:20,fontWeight:800}}>
          {brand ? `📺 Firmware ${brand}` : type ? `📁 Firmware ${type}` : "📁 Daftar Firmware"} ({data.length})
        </h1>
        <p style={{color:"#666",fontSize:12,marginTop:4}}>Filter kategori biar gak bingung • QRIS Rp 15.000</p>

        {/* KATEGORI MENU - INI YANG BOS MAU */}
        <div style={{marginTop:16,background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:12}}>
          <div style={{fontSize:12,fontWeight:700,color:"#0A84FF",marginBottom:8}}>📁 KATEGORI FIRMWARE</div>
          
          <div style={{background:"#050A14",borderRadius:10,padding:10,marginBottom:8}}>
            <div style={{fontSize:12,fontWeight:700,marginBottom:8}}>📺 Firmware TV ▼</div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {brands.map(b=>(
                <a key={b} href={`/firmware?brand=${b}`} style={{background: brand===b ? "#0A84FF":"#1a2336", color:"#fff", padding:"7px 12px", borderRadius:20, fontSize:11, textDecoration:"none", fontWeight: brand===b ? 800:400}}>
                  {brand===b ? "✓ ":""}{b}
                </a>
              ))}
            </div>
          </div>

          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            <a href="/firmware" style={{background:!brand&&!type?"#0A84FF":"#050A14", border:"1px solid #1e2d4a", color:"#fff", padding:"7px 12px", borderRadius:20, fontSize:11, textDecoration:"none"}}>Semua</a>
            <a href="/firmware?type=STB" style={{background:type==="STB"?"#0A84FF":"#050A14", border:"1px solid #1e2d4a", color:"#fff", padding:"7px 12px", borderRadius:20, fontSize:11, textDecoration:"none"}}>📡 STB</a>
            <a href="/firmware?type=Speaker" style={{background:type==="Speaker"?"#0A84FF":"#050A14", border:"1px solid #1e2d4a", color:"#fff", padding:"7px 12px", borderRadius:20, fontSize:11, textDecoration:"none"}}>🔊 Speaker</a>
            {brand && <a href="/firmware" style={{background:"#ff3b30", color:"#fff", padding:"7px 12px", borderRadius:20, fontSize:11, textDecoration:"none"}}>✕ Hapus filter {brand}</a>}
          </div>
        </div>

        {/* LIST FIRMWARE */}
        <div style={{marginTop:16,display:"grid",gap:10}}>
          {data.map((fw:any)=>(
            <a key={fw.id} href={`/firmware/${fw.model_slug}`} style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,display:"flex",justifyContent:"space-between",alignItems:"center",textDecoration:"none"}}>
              <div>
                <div style={{color:"#fff",fontWeight:700,fontSize:13}}>{fw.brand} {fw.model}</div>
                <div style={{color:"#666",fontSize:11,marginTop:3}}>{fw.mainboard || "-"} | {fw.chipset || "-"} | {fw.size || ""}</div>
                <div style={{color:"#0A84FF",fontSize:10,marginTop:4}}>Brand: {fw.brand} {fw.type ? `• ${fw.type}`:""}</div>
              </div>
              <div style={{background:"#0A84FF",color:"#fff",padding:"6px 12px",borderRadius:8,fontSize:11,fontWeight:700}}>Buka</div>
            </a>
          ))}
          {data.length===0 && (
            <div style={{textAlign:"center",padding:40,color:"#666"}}>
              <div style={{fontSize:40}}>📭</div>
              <div style={{marginTop:10}}>Belum ada firmware {brand || type || ""}</div>
              <div style={{fontSize:11,marginTop:6}}>Upload dulu via /admin/firmware</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
