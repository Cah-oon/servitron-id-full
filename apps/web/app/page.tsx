export default function HomePage() {
  return (
    <div style={{background:"#050A14",minHeight:"100vh",color:"#fff",fontFamily:"sans-serif"}}>
      {/* HEADER */}
      <div style={{height:56,background:"#080D1A",borderBottom:"1px solid #1a2336",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",position:"sticky",top:0,zIndex:20}}>
        <div style={{fontWeight:900,letterSpacing:1}}>SERVITRON.ID</div>
        <div style={{display:"flex",gap:8}}>
          <a href="/firmware" style={{background:"#0A84FF",color:"#fff",padding:"8px 14px",borderRadius:10,textDecoration:"none",fontSize:12,fontWeight:700}}>📁 Firmware</a>
          <a href="/admin/firmware" style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#888",padding:"8px 14px",borderRadius:10,textDecoration:"none",fontSize:12}}>Admin</a>
        </div>
      </div>

      {/* HERO */}
      <div style={{padding:"32px 16px",textAlign:"center",maxWidth:700,margin:"0 auto"}}>
        <div style={{display:"inline-block",background:"#0A84FF22",border:"1px solid #0A84FF44",color:"#0A84FF",padding:"6px 12px",borderRadius:20,fontSize:11,fontWeight:700}}>⚡ PUSAT FIRMWARE TV INDONESIA</div>
        <h1 style={{fontSize:32,fontWeight:900,marginTop:16,lineHeight:1.2}}>Cari Firmware<br/><span style={{color:"#0A84FF"}}>TV Rusak?</span><br/>Disini Ada!</h1>
        <p style={{color:"#888",fontSize:14,marginTop:12,lineHeight:1.6}}>15.000+ firmware TV Polytron, LG, Samsung, Sharp, TCL, Hisense, Coocaa lengkap mainboard & chipset. Download langsung QRIS Rp 15.000</p>
        
        <a href="/firmware" style={{display:"block",marginTop:20,background:"#0A84FF",color:"#fff",padding:"16px",borderRadius:14,textAlign:"center",textDecoration:"none",fontWeight:800,fontSize:16}}>📁 BUKA KATALOG FIRMWARE →</a>
        
        <div style={{marginTop:12,display:"flex",gap:8,justifyContent:"center"}}>
          <a href="https://wa.me/6281234567890" style={{background:"#00AA5B22",border:"1px solid #00AA5B44",color:"#00AA5B",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontSize:12}}>💬 WA Teknisi</a>
          <a href="/firmware?q=Polytron" style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontSize:12}}>🔍 Cari Polytron</a>
        </div>
      </div>

      {/* KATEGORI CEPAT - INI YANG BOS MAU */}
      <div style={{padding:16,maxWidth:700,margin:"0 auto"}}>
        <div style={{fontWeight:800,fontSize:14,marginBottom:10}}>📁 KATEGORI FIRMWARE</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          <a href="/firmware?brand=Polytron" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textDecoration:"none"}}>
            <div style={{fontSize:20}}>📺</div>
            <div style={{color:"#fff",fontWeight:700,marginTop:6,fontSize:13}}>Firmware TV</div>
            <div style={{color:"#666",fontSize:11,marginTop:2}}>Polytron, LG, Samsung, Sharp...</div>
            <div style={{color:"#0A84FF",fontSize:11,marginTop:6,fontWeight:700}}>Lihat →</div>
          </a>
          <a href="/firmware?type=STB" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textDecoration:"none"}}>
            <div style={{fontSize:20}}>📡</div>
            <div style={{color:"#fff",fontWeight:700,marginTop:6,fontSize:13}}>Firmware STB</div>
            <div style={{color:"#666",fontSize:11,marginTop:2}}>STB DVB-T2 semua merk</div>
            <div style={{color:"#0A84FF",fontSize:11,marginTop:6,fontWeight:700}}>Lihat →</div>
          </a>
        </div>

        {/* BRAND PILLS */}
        <div style={{marginTop:14,background:"#080D1A",border:"1px solid #1a2336",borderRadius:14,padding:12}}>
          <div style={{fontSize:11,color:"#666",marginBottom:8}}>POPULER:</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {["Polytron","LG","Samsung","Sharp","TCL","Hisense","Coocaa","Philips"].map(b=>(
              <a key={b} href={`/firmware?brand=${b}`} style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"7px 12px",borderRadius:20,fontSize:11,textDecoration:"none"}}>{b}</a>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{textAlign:"center",padding:24,color:"#444",fontSize:11,marginTop:20,borderTop:"1px solid #111"}}>
        servitron-id-full-web.vercel.app<br/>© 2025 SERVITRON.ID • Pusat Firmware TV Indonesia
      </div>
    </div>
  )
}
