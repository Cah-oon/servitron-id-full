"use client";
import { useState } from "react";

export default function LayoutMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [openFw, setOpenFw] = useState(false);
  const [openTv, setOpenTv] = useState(false);

  return (
    <div>
      {/* TOP BAR */}
      <div style={{height:56,background:"#080D1A",borderBottom:"1px solid #1a2336",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",position:"sticky",top:0,zIndex:50}}>
        <a href="/" style={{fontWeight:900,fontSize:16,color:"#fff",textDecoration:"none",letterSpacing:1}}>SERVITRON.ID</a>
        <button onClick={()=>setOpen(!open)} style={{width:40,height:40,borderRadius:10,background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",fontSize:20}}>☰</button>
      </div>

      {/* OVERLAY MENU */}
      {open && (
        <div style={{position:"fixed",inset:0,zIndex:100,background:"rgba(0,0,0,0.8)"}} onClick={()=>setOpen(false)}>
          <div style={{position:"absolute",right:0,top:0,width:280,height:"100%",background:"#0A0F1E",borderLeft:"1px solid #1e2d4a",padding:16,overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontWeight:800}}>MENU</div>
              <button onClick={()=>setOpen(false)} style={{width:32,height:32,borderRadius:8,background:"#1a2336",border:"none",color:"#fff"}}>✕</button>
            </div>

            <div style={{marginTop:16,display:"flex",flexDirection:"column",gap:6}}>
              <a href="/" style={{padding:"12px",background:"#0C1426",borderRadius:10,color:"#fff",textDecoration:"none",fontSize:13}}>🏠 Home</a>
              
              {/* FIRMWARE MENU */}
              <div style={{background:"#0C1426",borderRadius:10,overflow:"hidden",border:"1px solid #1e2d4a"}}>
                <button onClick={()=>setOpenFw(!openFw)} style={{width:"100%",padding:"12px",background:openFw?"#1a2336":"transparent",border:"none",color:"#fff",textAlign:"left",fontSize:13,fontWeight:700,display:"flex",justifyContent:"space-between"}}>
                  <span>📁 Firmware</span><span>{openFw?"▲":"▼"}</span>
                </button>
                {openFw && (
                  <div style={{padding:"6px",display:"flex",flexDirection:"column",gap:4}}>
                    {/* FIRMWARE TV */}
                    <div style={{background:"#050A14",borderRadius:8,overflow:"hidden"}}>
                      <button onClick={()=>setOpenTv(!openTv)} style={{width:"100%",padding:"10px 12px",border:"none",background:"transparent",color:"#0A84FF",textAlign:"left",fontSize:12,fontWeight:700,display:"flex",justifyContent:"space-between"}}>
                        <span>📺 Firmware TV</span><span>{openTv?"▲":"▼"}</span>
                      </button>
                      {openTv && (
                        <div style={{padding:"0 6px 6px 6px",display:"flex",flexDirection:"column",gap:3}}>
                          {["Polytron","LG","Samsung","Sharp","TCL","Hisense","Coocaa","Philips"].map(brand=>(
                            <a key={brand} href={`/firmware?brand=${brand}`} onClick={()=>setOpen(false)} style={{padding:"8px 12px",background:"#0C1426",borderRadius:6,color:"#fff",textDecoration:"none",fontSize:12}}>→ {brand}</a>
                          ))}
                          <a href="/firmware" onClick={()=>setOpen(false)} style={{padding:"8px 12px",background:"#0A84FF",borderRadius:6,color:"#fff",textDecoration:"none",fontSize:12,fontWeight:700,textAlign:"center"}}>Lihat Semua TV →</a>
                        </div>
                      )}
                    </div>
                    <a href="/firmware?type=STB" onClick={()=>setOpen(false)} style={{padding:"10px 12px",background:"#050A14",borderRadius:8,color:"#fff",textDecoration:"none",fontSize:12}}>📡 Firmware STB</a>
                    <a href="/firmware?type=Speaker" onClick={()=>setOpen(false)} style={{padding:"10px 12px",background:"#050A14",borderRadius:8,color:"#fff",textDecoration:"none",fontSize:12}}>🔊 Firmware Speaker</a>
                  </div>
                )}
              </div>

              <a href="/firmware" style={{padding:"12px",background:"#0A84FF",borderRadius:10,color:"#fff",textDecoration:"none",fontSize:13,fontWeight:700,textAlign:"center"}}>📁 Buka Semua Firmware</a>
              <a href="/admin/firmware" style={{padding:"12px",background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:10,color:"#888",textDecoration:"none",fontSize:12}}>🛠️ Admin Bulk Upload</a>
              <a href="https://wa.me/6281234567890" style={{padding:"12px",background:"#00AA5B22",border:"1px solid #00AA5B44",borderRadius:10,color:"#00AA5B",textDecoration:"none",fontSize:12}}>💬 WA Teknisi</a>
            </div>

            <div style={{marginTop:20,padding:10,background:"#050A14",borderRadius:8,fontSize:10,color:"#555",textAlign:"center"}}>
              servitron-id-full-web.vercel.app<br/>Live {new Date().getFullYear()}
            </div>
          </div>
        </div>
      )}

      <div>{children}</div>
    </div>
  )
}
