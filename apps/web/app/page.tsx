export default function Home() {
  return (
    <div style={{background:"#050A14",minHeight:"100vh",color:"#fff",padding:20,fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:24,fontWeight:800}}>SERVITRON.ID</h1>
      <p style={{color:"#888",marginTop:8}}>Pusat Firmware TV Indonesia</p>
      <a href="/firmware" style={{display:"block",marginTop:20,background:"#0A84FF",color:"#fff",padding:"14px",borderRadius:12,textAlign:"center",textDecoration:"none",fontWeight:700}}>📁 Buka Daftar Firmware</a>
      <div style={{marginTop:20,background:"#0C1426",padding:14,borderRadius:12}}>
        <div style={{fontSize:12,color:"#0A84FF"}}>MENU KATEGORI:</div>
        <div style={{marginTop:10,display:"flex",gap:8,flexWrap:"wrap"}}>
          <a href="/firmware?brand=Polytron" style={{background:"#1a2336",color:"#fff",padding:"8px 12px",borderRadius:8,fontSize:12,textDecoration:"none"}}>Polytron</a>
          <a href="/firmware?brand=LG" style={{background:"#1a2336",color:"#fff",padding:"8px 12px",borderRadius:8,fontSize:12,textDecoration:"none"}}>LG</a>
          <a href="/firmware?brand=Samsung" style={{background:"#1a2336",color:"#fff",padding:"8px 12px",borderRadius:8,fontSize:12,textDecoration:"none"}}>Samsung</a>
          <a href="/firmware?brand=Sharp" style={{background:"#1a2336",color:"#fff",padding:"8px 12px",borderRadius:8,fontSize:12,textDecoration:"none"}}>Sharp</a>
        </div>
      </div>
    </div>
  )
}
