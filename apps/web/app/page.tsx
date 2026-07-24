export default function HomePage() {
  return (
    <div style={{background:"#050A14",minHeight:"100vh",color:"#fff",fontFamily:"sans-serif"}}>
      {/* HEADER */}
      <div style={{height:56,background:"#080D1A",borderBottom:"1px solid #1a2336",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",position:"sticky",top:0,zIndex:20}}>
        <div style={{fontWeight:900,letterSpacing:1}}>SERVITRON.ID</div>
        <div style={{display:"flex",gap:8}}>
          <a href="/firmware" style={{background:"#0A84FF",color:"#fff",padding:"8px 14px",borderRadius:10,textDecoration:"none",fontSize:12,fontWeight:700}}>📁 Firmware</a>
          <a href="/firmware?type=STB" style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#888",padding:"8px 14px",borderRadius:10,textDecoration:"none",fontSize:12}}>STB</a>
        </div>
      </div>

      {/* HERO */}
      <div style={{padding:"32px 16px",textAlign:"center",maxWidth:700,margin:"0 auto"}}>
        <div style={{display:"inline-block",background:"#0A84FF22",border:"1px solid #0A84FF44",color:"#0A84FF",padding:"6px 12px",borderRadius:20,fontSize:11,fontWeight:700}}>⚡ PUSAT FIRMWARE TV INDONESIA • EST 2020</div>
        <h1 style={{fontSize:34,fontWeight:900,marginTop:16,lineHeight:1.15}}>Cari Firmware<br/><span style={{color:"#0A84FF"}}>TV Rusak?</span><br/>Disini Ada!</h1>
        <p style={{color:"#888",fontSize:14,marginTop:12,lineHeight:1.6}}>15.000+ firmware TV Polytron, LG, Samsung, Sharp, TCL, Hisense, Coocaa lengkap mainboard & chipset. Download langsung QRIS Rp 15.000. Untuk teknisi seluruh Indonesia.</p>
        <a href="/firmware" style={{display:"block",marginTop:20,background:"#0A84FF",color:"#fff",padding:"16px",borderRadius:14,textAlign:"center",textDecoration:"none",fontWeight:800,fontSize:16,boxShadow:"0 0 30px #0A84FF44"}}>📁 BUKA KATALOG FIRMWARE →</a>
        <div style={{marginTop:10,display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="https://wa.me/6281234567890" style={{background:"#00AA5B22",border:"1px solid #00AA5B44",color:"#00AA5B",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontSize:12,fontWeight:700}}>💬 WA Teknisi</a>
          <a href="/firmware?brand=Polytron" style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontSize:12}}>🔍 Cari Polytron</a>
          <a href="/firmware?brand=LG" style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontSize:12}}>LG</a>
        </div>
        <div style={{marginTop:20,display:"flex",justifyContent:"center",gap:20,fontSize:11,color:"#555"}}>
          <span>✅ 15.000+ File</span><span>✅ 24 Jam Online</span><span>✅ 5000+ Teknisi</span>
        </div>
      </div>

      {/* STATS */}
      <div style={{padding:"0 16px",maxWidth:700,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
          <div style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textAlign:"center"}}><div style={{fontSize:22,fontWeight:900,color:"#0A84FF"}}>15K+</div><div style={{fontSize:11,color:"#666",marginTop:2}}>Firmware</div></div>
          <div style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textAlign:"center"}}><div style={{fontSize:22,fontWeight:900,color:"#00AA5B"}}>12+</div><div style={{fontSize:11,color:"#666",marginTop:2}}>Merk TV</div></div>
          <div style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textAlign:"center"}}><div style={{fontSize:22,fontWeight:900,color:"#FFB800"}}>5K+</div><div style={{fontSize:11,color:"#666",marginTop:2}}>Teknisi</div></div>
        </div>
      </div>

      {/* KATEGORI FIRMWARE - YANG BOS MAU DIPISAH */}
      <div style={{padding:16,maxWidth:700,margin:"16px auto 0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{fontWeight:800,fontSize:14}}>📁 KATEGORI FIRMWARE</div><a href="/firmware" style={{color:"#0A84FF",fontSize:11,textDecoration:"none"}}>Lihat semua →</a></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:10}}>
          <a href="/firmware?brand=Polytron" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textDecoration:"none"}}>
            <div style={{fontSize:22}}>📺</div><div style={{color:"#fff",fontWeight:700,marginTop:6,fontSize:13}}>Firmware TV</div><div style={{color:"#666",fontSize:11,marginTop:2}}>Polytron, LG, Samsung, Sharp, TCL...</div><div style={{color:"#0A84FF",fontSize:11,marginTop:8,fontWeight:700}}>Buka →</div>
          </a>
          <a href="/firmware?type=STB" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textDecoration:"none"}}>
            <div style={{fontSize:22}}>📡</div><div style={{color:"#fff",fontWeight:700,marginTop:6,fontSize:13}}>Firmware STB</div><div style={{color:"#666",fontSize:11,marginTop:2}}>STB DVB-T2 semua merk</div><div style={{color:"#0A84FF",fontSize:11,marginTop:8,fontWeight:700}}>Buka →</div>
          </a>
          <a href="/firmware?type=Speaker" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textDecoration:"none"}}>
            <div style={{fontSize:22}}>🔊</div><div style={{color:"#fff",fontWeight:700,marginTop:6,fontSize:13}}>Speaker Aktif</div><div style={{color:"#666",fontSize:11,marginTop:2}}>Polytron, GMC, dll</div><div style={{color:"#0A84FF",fontSize:11,marginTop:8,fontWeight:700}}>Buka →</div>
          </a>
          <a href="/tools" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textDecoration:"none"}}>
            <div style={{fontSize:22}}>🛠️</div><div style={{color:"#fff",fontWeight:700,marginTop:6,fontSize:13}}>Tools Teknisi</div><div style={{color:"#666",fontSize:11,marginTop:2}}>Eeprom, Flasher, dll</div><div style={{color:"#0A84FF",fontSize:11,marginTop:8,fontWeight:700}}>Buka →</div>
          </a>
        </div>

        <div style={{marginTop:12,background:"#080D1A",border:"1px solid #1a2336",borderRadius:14,padding:12}}>
          <div style={{fontSize:11,color:"#666",marginBottom:8}}>BRAND POPULER:</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {["Polytron","LG","Samsung","Sharp","TCL","Hisense","Coocaa","Philips","Aqua","Changhong"].map(b=>(
              <a key={b} href={`/firmware?brand=${b}`} style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"7px 12px",borderRadius:20,fontSize:11,textDecoration:"none"}}>{b}</a>
            ))}
          </div>
        </div>
      </div>

      {/* CARA KERJA */}
      <div style={{padding:16,maxWidth:700,margin:"0 auto"}}>
        <div style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:16,padding:16}}>
          <div style={{fontWeight:800,fontSize:14}}>⚡ CARA DOWNLOAD</div>
          <div style={{marginTop:12,display:"flex",flexDirection:"column",gap:12}}>
            <div style={{display:"flex",gap:12}}><div style={{width:28,height:28,borderRadius:8,background:"#0A84FF",display:"grid",placeItems:"center",fontSize:12,fontWeight:800}}>1</div><div><div style={{fontSize:13,fontWeight:700}}>Cari Model TV</div><div style={{fontSize:11,color:"#666"}}>Ketik merk & model, contoh: PLD32T9552</div></div></div>
            <div style={{display:"flex",gap:12}}><div style={{width:28,height:28,borderRadius:8,background:"#0A84FF",display:"grid",placeItems:"center",fontSize:12,fontWeight:800}}>2</div><div><div style={{fontSize:13,fontWeight:700}}>Bayar QRIS 15K</div><div style={{fontSize:11,color:"#666"}}>Scan QRIS otomatis, gak perlu chat</div></div></div>
            <div style={{display:"flex",gap:12}}><div style={{width:28,height:28,borderRadius:8,background:"#0A84FF",display:"grid",placeItems:"center",fontSize:12,fontWeight:800}}>3</div><div><div style={{fontSize:13,fontWeight:700}}>Download Langsung</div><div style={{fontSize:11,color:"#666"}}>File .bin siap flash pakai CH341</div></div></div>
          </div>
        </div>
      </div>

      {/* KEUNGGULAN */}
      <div style={{padding:"0 16px 16px",maxWidth:700,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          <div style={{background:"#080D1A",border:"1px solid #1a2336",borderRadius:14,padding:12}}><div style={{fontSize:16}}>🎯</div><div style={{fontSize:12,fontWeight:700,marginTop:6}}>Lengkap Mainboard</div><div style={{fontSize:11,color:"#666",marginTop:2}}>Info mainboard, chipset, eMMC jelas</div></div>
          <div style={{background:"#080D1A",border:"1px solid #1a2336",borderRadius:14,padding:12}}><div style={{fontSize:16}}>⚡</div><div style={{fontSize:12,fontWeight:700,marginTop:6}}>Tested Teknisi</div><div style={{fontSize:11,color:"#666",marginTop:2}}>Sudah di test teknisi Servitron</div></div>
        </div>
      </div>

      {/* CTA */}
      <div style={{padding:16,maxWidth:700,margin:"0 auto"}}>
        <div style={{background:"linear-gradient(135deg,#0A84FF,#0066CC)",borderRadius:16,padding:20,textAlign:"center"}}>
          <div style={{fontSize:18,fontWeight:800}}>Butuh Bantuan Cari Firmware?</div>
          <div style={{fontSize:12,opacity:0.8,marginTop:4}}>Chat teknisi kami, respon cepat!</div>
          <a href="https://wa.me/6281234567890" style={{display:"block",marginTop:12,background:"#fff",color:"#0A84FF",padding:"12px",borderRadius:10,textDecoration:"none",fontWeight:800,fontSize:13}}>💬 CHAT WHATSAPP</a>
        </div>
      </div>

      <div style={{textAlign:"center",padding:24,color:"#444",fontSize:11,marginTop:10,borderTop:"1px solid #111"}}>
        servitron-id-full-web.vercel.app • servitron.id<br/>© 2025 SERVITRON.ID • Pusat Firmware TV Indonesia<br/>Made for Teknisi Indonesia ❤️
      </div>
    </div>
  )
}
