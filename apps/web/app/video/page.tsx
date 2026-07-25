export default function VideoPage() {
  return (
    <div style={{background:"#050A14",minHeight:"100vh",color:"#fff",fontFamily:"sans-serif"}}>
      <div style={{height:56,background:"#080D1A",borderBottom:"1px solid #1a2336",display:"flex",alignItems:"center",padding:"0 16px",gap:10,position:"sticky",top:0}}>
        <a href="/" style={{color:"#fff",textDecoration:"none",fontWeight:900}}>SERVITRON.ID</a><span style={{color:"#444"}}>/</span><span style={{color:"#0A84FF",fontSize:13,fontWeight:700}}>VIDEO</span>
      </div>
      <div style={{padding:16,maxWidth:1000,margin:"0 auto"}}>
        <h1 style={{fontSize:20,fontWeight:800}}>🎬 Video Kasus Kerusakan</h1>
        <p style={{color:"#666",fontSize:11,marginTop:4}}>Integrasi YouTube, TikTok, Facebook, Instagram • Judul, Kode Error, Penyebab, Solusi, Estimasi Biaya</p>
        <div style={{marginTop:12,display:"flex",gap:6,flexWrap:"wrap"}}>
          {["Semua","TV LED","Mesin Cuci","Kulkas","AC","Error Code"].map(c=><span key={c} style={{background:"#0C1426",border:"1px solid #1e2d4a",padding:"6px 12px",borderRadius:20,fontSize:11}}>{c}</span>)}
        </div>
        <div style={{marginTop:16,display:"grid",gap:10}}>
          {[
            {t:"TV Polytron Bootloop - Ganti IC EMMC",code:"Bootloop",view:"12K"},
            {t:"LG Kedip 3x - Kerusakan Backlight",code:"Kedip 3x",view:"8.5K"},
            {t:"Samsung Gambar Blank - Mainboard",code:"Blank",view:"15K"},
          ].map((v,i)=>(
            <div key={i} style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:12,display:"flex",gap:12}}>
              <div style={{width:80,height:48,background:"#1a2336",borderRadius:8,display:"grid",placeItems:"center"}}>▶️</div>
              <div style={{flex:1}}><div style={{fontSize:12,fontWeight:700}}>{v.t}</div><div style={{fontSize:10,color:"#666",marginTop:3}}>Kode: {v.code} • 👁️ {v.view} • Firmware terkait: Ada</div></div>
            </div>
          ))}
        </div>
        <div style={{marginTop:16,background:"#0A84FF22",border:"1px solid #0A84FF44",borderRadius:12,padding:12,textAlign:"center"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#0A84FF"}}>🎥 Segera: Integrasi YouTube API + TikTok API otomatis</div>
          <a href="/" style={{display:"inline-block",marginTop:8,color:"#0A84FF",fontSize:11,textDecoration:"none"}}>← Kembali ke Beranda</a>
        </div>
      </div>
    </div>
  )
}
