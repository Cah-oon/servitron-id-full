export default function BlogPage({searchParams}:{searchParams:{cat?:string}}) {
  const cat = searchParams?.cat || "Semua"
  const categories = ["Semua","TV LED","Smart TV","Android TV","Mesin Cuci","Kulkas","AC","Laptop","Printer","Audio","Power Supply","Arduino","ESP32","IoT","Tips Service","Firmware"]
  const posts = [
    {title:"Cara Atasi TV Polytron Bootloop Logo",cat:"TV LED",read:"5 menit",seo:"✅ SEO • FAQ • Schema"},
    {title:"Database Kerusakan TV LG Berkedip 3x",cat:"TV LED",read:"7 menit",seo:"✅ Rich Snippet"},
    {title:"Ganti Backlight TV Samsung 32 inch Tanpa Ribet",cat:"Tips Service",read:"10 menit",seo:"✅ Breadcrumb"},
    {title:"Kulkas Polytron Tidak Dingin, Ini Solusinya",cat:"Kulkas",read:"6 menit",seo:"✅ OpenGraph"},
    {title:"Mesin Cuci Sharp Error E3, Penyebab & Solusi",cat:"Mesin Cuci",read:"4 menit",seo:"✅ JSON-LD"},
  ]
  const filtered = cat==="Semua" ? posts : posts.filter(p=>p.cat===cat)

  return (
    <div style={{background:"#050A14",minHeight:"100vh",color:"#fff",fontFamily:"sans-serif"}}>
      <div style={{height:56,background:"#080D1A",borderBottom:"1px solid #1a2336",display:"flex",alignItems:"center",padding:"0 16px",gap:10,position:"sticky",top:0,zIndex:20}}>
        <a href="/" style={{color:"#fff",textDecoration:"none",fontWeight:900}}>SERVITRON.ID</a>
        <span style={{color:"#444"}}>/</span>
        <span style={{color:"#0A84FF",fontWeight:700,fontSize:13}}>BLOG</span>
      </div>
      <div style={{padding:16,maxWidth:1000,margin:"0 auto"}}>
        <h1 style={{fontSize:20,fontWeight:800}}>📝 Blog Service Elektronik ({filtered.length})</h1>
        <p style={{color:"#666",fontSize:11,marginTop:4}}>Kategori: {cat} • SEO • FAQ • Breadcrumb • Komentar • Rating • Share Sosmed • Schema.org</p>
        
        <div style={{marginTop:12,display:"flex",gap:6,flexWrap:"wrap"}}>
          {categories.map(c=>(
            <a key={c} href={c==="Semua"?"/blog":`/blog?cat=${encodeURIComponent(c)}`} style={{background:cat===c?"#0A84FF":"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"6px 12px",borderRadius:20,fontSize:11,textDecoration:"none"}}>{c}</a>
          ))}
        </div>

        <div style={{marginTop:16,display:"grid",gap:10}}>
          {filtered.map((p,i)=>(
            <a key={i} href="/blog" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textDecoration:"none",display:"block"}}>
              <div style={{display:"flex",gap:10}}>
                <div style={{width:56,height:56,background:"#1a2336",borderRadius:10,display:"grid",placeItems:"center",fontSize:20}}>📄</div>
                <div style={{flex:1}}>
                  <div style={{color:"#fff",fontWeight:700,fontSize:13,lineHeight:1.3}}>{p.title}</div>
                  <div style={{color:"#666",fontSize:11,marginTop:4}}>{p.cat} • {p.read} • ⭐ 4.9 • 💬 12 komentar</div>
                  <div style={{color:"#0A84FF",fontSize:10,marginTop:4}}>{p.seo}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{marginTop:20,background:"#0C1426",border:"1px dashed #1e2d4a",borderRadius:14,padding:20,textAlign:"center"}}>
          <div style={{fontSize:12,color:"#888"}}>🚀 Master Prompt: Blog akan terhubung ke Database, Video Tutorial, dan Firmware terkait. Setiap artikel memiliki FAQ, Rating, Bookmark, Share Sosmed, Rich Snippet, OpenGraph, JSON-LD.</div>
          <a href="/firmware" style={{display:"inline-block",marginTop:12,background:"#0A84FF",color:"#fff",padding:"10px 16px",borderRadius:10,textDecoration:"none",fontSize:12,fontWeight:700}}>Lihat Firmware Terkait →</a>
        </div>
      </div>
    </div>
  )
}
