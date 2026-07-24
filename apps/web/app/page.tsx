export default function Home(){
 return(
  <div style={{background:"#050A14",minHeight:"100vh",color:"#fff",padding:20,fontFamily:"sans-serif"}}>
   <h1 style={{fontSize:26,fontWeight:800}}>SERVITRON.ID</h1>
   <p style={{color:"#888"}}>Pusat Firmware TV Indonesia</p>
   <a href="/firmware" style={{display:"block",marginTop:20,background:"#0A84FF",color:"#fff",padding:"16px",borderRadius:12,textAlign:"center",textDecoration:"none",fontWeight:800}}>📁 BUKA FIRMWARE</a>
   <div style={{marginTop:20,display:"flex",gap:8,flexWrap:"wrap"}}>
    <a href="/firmware?brand=Polytron" style={{background:"#0C1426",color:"#fff",padding:"10px 14px",borderRadius:8,textDecoration:"none"}}>Polytron</a>
    <a href="/firmware?brand=LG" style={{background:"#0C1426",color:"#fff",padding:"10px 14px",borderRadius:8,textDecoration:"none"}}>LG</a>
    <a href="/firmware?brand=Samsung" style={{background:"#0C1426",color:"#fff",padding:"10px 14px",borderRadius:8,textDecoration:"none"}}>Samsung</a>
    <a href="/firmware?brand=Sharp" style={{background:"#0C1426",color:"#fff",padding:"10px 14px",borderRadius:8,textDecoration:"none"}}>Sharp</a>
   </div>
  </div>
 )
}
