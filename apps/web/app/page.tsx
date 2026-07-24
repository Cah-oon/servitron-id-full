// SERVITRON.ID - PORTAL SERVICE ELEKTRONIK TERBESAR INDONESIA
// MASTER PROMPT: Blog + Firmware + Database Kerusakan + Video + Direktori Teknisi + Toko + Marketplace

export default function HomePage() {
  return (
    <div style={{background:"#050A14",minHeight:"100vh",color:"#fff",fontFamily:"sans-serif"}}>
      {/* HEADER */}
      <header style={{height:60,background:"#080D1ABF",backdropFilter:"blur(12px)",borderBottom:"1px solid #1a2336",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",position:"sticky",top:0,zIndex:50}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:32,height:32,background:"linear-gradient(135deg,#0A84FF,#00D1FF)",borderRadius:8,display:"grid",placeItems:"center",fontWeight:900}}>S</div>
          <div><div style={{fontWeight:900,letterSpacing:1,fontSize:14}}>SERVITRON.ID</div><div style={{fontSize:9,color:"#0A84FF",letterSpacing:1}}>SERVICE PORTAL</div></div>
        </div>
        <nav style={{display:"flex",gap:6}}>
          <a href="/blog" style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"8px 12px",borderRadius:10,textDecoration:"none",fontSize:11,fontWeight:700}}>📝 Blog</a>
          <a href="/firmware" style={{background:"#0A84FF",color:"#fff",padding:"8px 14px",borderRadius:10,textDecoration:"none",fontSize:11,fontWeight:800}}>📁 Firmware</a>
        </nav>
      </header>

      {/* HERO BANNER - MASTER PROMPT: Hero + Search Firmware + Search Artikel */}
      <section style={{padding:"28px 16px",maxWidth:1100,margin:"0 auto"}}>
        <div style={{background:"linear-gradient(135deg,#0A0F1E 0%,#0C1426 50%,#0A84FF11 100%)",border:"1px solid #1e2d4a",borderRadius:20,padding:20,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-50,right:-50,width:150,height:150,background:"radial-gradient(circle,#0A84FF33,transparent)",borderRadius:"50%"}}></div>
          <div style={{display:"inline-flex",background:"#0A84FF22",border:"1px solid #0A84FF44",color:"#0A84FF",padding:"6px 12px",borderRadius:20,fontSize:10,fontWeight:800,letterSpacing:0.5}}>⚡ PORTAL SERVICE ELEKTRONIK #1 INDONESIA • 15K+ FIRMWARE • 5000+ TEKNISI</div>
          <h1 style={{fontSize:28,fontWeight:900,marginTop:14,lineHeight:1.15}}>Solusi Service<br/><span style={{background:"linear-gradient(90deg,#0A84FF,#00D1FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Elektronik</span> Terlengkap</h1>
          <p style={{color:"#888",fontSize:13,marginTop:10,lineHeight:1.6}}>Blog tutorial, database kerusakan, video perbaikan, download firmware anti link mati, direktori teknisi & toko sparepart terpercaya se-Indonesia.</p>
          
          {/* SEARCH DUAL - MASTER PROMPT */}
          <div style={{marginTop:16,display:"grid",gridTemplateColumns:"1fr",gap:8}}>
            <a href="/firmware" style={{background:"#fff",color:"#000",padding:"14px",borderRadius:12,display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}>
              <span style={{width:36,height:36,background:"#050A14",borderRadius:8,display:"grid",placeItems:"center",color:"#fff"}}>🔍</span>
              <div style={{flex:1}}><div style={{fontSize:13,fontWeight:800}}>Cari Firmware TV, STB, Speaker...</div><div style={{fontSize:11,color:"#666"}}>Polytron, LG, Samsung, Sharp, TCL...</div></div>
              <span style={{background:"#0A84FF",color:"#fff",padding:"6px 12px",borderRadius:8,fontSize:11,fontWeight:800}}>CARI</span>
            </a>
            <a href="/blog" style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"14px",borderRadius:12,display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}>
              <span style={{width:36,height:36,background:"#1a2336",borderRadius:8,display:"grid",placeItems:"center"}}>📝</span>
              <div style={{flex:1}}><div style={{fontSize:13,fontWeight:700}}>Cari Artikel Service & Tips</div><div style={{fontSize:11,color:"#666"}}>TV, Mesin Cuci, Kulkas, AC, Laptop...</div></div>
              <span style={{color:"#0A84FF",fontSize:11,fontWeight:800}}>Buka →</span>
            </a>
          </div>

          <div style={{marginTop:12,display:"flex",gap:10,fontSize:10,color:"#555"}}>
            <span>✅ Blog 500+</span><span>✅ Video 200+</span><span>✅ Firmware 15K+</span><span>✅ Anti Link Mati</span>
          </div>
        </div>
      </section>

      {/* KATEGORI BLOG - MASTER PROMPT */}
      <section style={{padding:"0 16px",maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h2 style={{fontSize:14,fontWeight:800}}>📚 KATEGORI BLOG SERVICE</h2><a href="/blog" style={{color:"#0A84FF",fontSize:11,textDecoration:"none"}}>Lihat semua →</a></div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:10}}>
          {["TV LED","Smart TV","Android TV","Mesin Cuci","Kulkas","AC","Laptop","Printer","Audio","Power Supply","Arduino","ESP32","IoT","Tips Service"].map(c=>(
            <a key={c} href={`/blog?cat=${c}`} style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#ccc",padding:"6px 10px",borderRadius:20,fontSize:11,textDecoration:"none"}}>{c}</a>
          ))}
        </div>
      </section>

      {/* GRID: ARTIKEL TERBARU + FIRMWARE TERBARU - MASTER PROMPT */}
      <section style={{padding:16,maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr",gap:12}}>
        {/* ARTIKEL TERBARU */}
        <div style={{background:"#080D1A",border:"1px solid #1a2336",borderRadius:16,padding:14}}>
          <div style={{display:"flex",justifyContent:"space-between"}}><div style={{fontWeight:800,fontSize:13}}>📝 Artikel Terbaru</div><span style={{fontSize:10,background:"#0A84FF22",color:"#0A84FF",padding:"4px 8px",borderRadius:10}}>SEO + FAQ + Schema</span></div>
          <div style={{marginTop:12,display:"flex",flexDirection:"column",gap:10}}>
            {[
              {t:"Cara Atasi TV Polytron Bootloop Logo",cat:"TV LED",time:"2 jam lalu"},
              {t:"Database Kerusakan TV LG Lampu Berkedip 3x",cat:"Database",time:"5 jam lalu"},
              {t:"Tips Ganti Backlight TV Samsung 32 inch",cat:"Tips Service",time:"1 hari lalu"},
            ].map((a,i)=>(
              <a key={i} href="/blog" style={{display:"flex",gap:10,textDecoration:"none",background:"#0C1426",padding:10,borderRadius:12,border:"1px solid #1a2336"}}>
                <div style={{width:48,height:48,background:"#1a2336",borderRadius:8,display:"grid",placeItems:"center",fontSize:18}}>📄</div>
                <div style={{flex:1}}><div style={{color:"#fff",fontSize:12,fontWeight:700,lineHeight:1.3}}>{a.t}</div><div style={{color:"#666",fontSize:10,marginTop:3}}>{a.cat} • {a.time} • ⭐ 4.9</div></div>
              </a>
            ))}
          </div>
          <a href="/blog" style={{display:"block",marginTop:10,background:"#0C1426",border:"1px dashed #1e2d4a",color:"#888",padding:"10px",borderRadius:10,textAlign:"center",textDecoration:"none",fontSize:11}}>Lihat semua artikel →</a>
        </div>

        {/* FIRMWARE TERBARU - DENGAN KATEGORI */}
        <div style={{background:"#080D1A",border:"1px solid #1a2336",borderRadius:16,padding:14}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{fontWeight:800,fontSize:13}}>📁 Firmware Terbaru</div><span style={{fontSize:10,background:"#00AA5B22",color:"#00AA5B",padding:"4px 8px",borderRadius:10}}>Anti Link Mati • UUID</span></div>
          
          {/* KATEGORI FIRMWARE YANG BOS MINTA */}
          <div style={{marginTop:10,background:"#0C1426",borderRadius:12,padding:10}}>
            <div style={{fontSize:11,fontWeight:700,color:"#0A84FF"}}>📁 KATEGORI FIRMWARE ▼</div>
            <div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap"}}>
              {["Polytron","LG","Samsung","Sharp","TCL","Hisense"].map(b=>(
                <a key={b} href={`/firmware?brand=${b}`} style={{background:"#050A14",border:"1px solid #1e2d4a",color:"#fff",padding:"6px 10px",borderRadius:20,fontSize:11,textDecoration:"none"}}>→ {b}</a>
              ))}
              <a href="/firmware?type=STB" style={{background:"#1a2336",color:"#fff",padding:"6px 10px",borderRadius:20,fontSize:11,textDecoration:"none"}}>📡 STB</a>
              <a href="/firmware?type=Speaker" style={{background:"#1a2336",color:"#fff",padding:"6px 10px",borderRadius:20,fontSize:11,textDecoration:"none"}}>🔊 Speaker</a>
            </div>
          </div>

          <div style={{marginTop:10,display:"flex",flexDirection:"column",gap:8}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#666"}}><span>Model • Mainboard • Chipset</span><span>Download</span></div>
            {[
              {m:"Polytron PLD32T9552",mb:"TP.MS358.PB818",dl:"1.2k"},
              {m:"LG 32LM550BPTA",mb:"EAX66884603",dl:"890"},
              {m:"Samsung UA32N4003",mb:"BN41-02534B",dl:"2.1k"},
            ].map((f,i)=>(
              <a key={i} href="/firmware" style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#0C1426",padding:10,borderRadius:10,textDecoration:"none",border:"1px solid #1a2336"}}>
                <div><div style={{color:"#fff",fontSize:12,fontWeight:700}}>{f.m}</div><div style={{color:"#666",fontSize:10}}>{f.mb} • {f.dl} download</div></div>
                <div style={{background:"#0A84FF",color:"#fff",padding:"5px 10px",borderRadius:8,fontSize:10,fontWeight:800}}>15K</div>
              </a>
            ))}
          </div>
          <a href="/firmware" style={{display:"block",marginTop:10,background:"#0A84FF",color:"#fff",padding:"12px",borderRadius:10,textAlign:"center",textDecoration:"none",fontSize:12,fontWeight:800}}>📁 BUKA KATALOG FIRMWARE (15.000+) →</a>
        </div>
      </section>

      {/* VIDEO TERBARU + TEKNISI + TOKO - MASTER PROMPT */}
      <section style={{padding:"0 16px",maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr",gap:12}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          <a href="/video" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:12,textDecoration:"none"}}>
            <div style={{fontSize:18}}>🎬</div><div style={{color:"#fff",fontSize:12,fontWeight:700,marginTop:6}}>Video Tutorial</div><div style={{color:"#666",fontSize:10,marginTop:2}}>YouTube • TikTok • 200+ video</div>
          </a>
          <a href="/teknisi" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:12,textDecoration:"none"}}>
            <div style={{fontSize:18}}>👨‍🔧</div><div style={{color:"#fff",fontSize:12,fontWeight:700,marginTop:6}}>Teknisi Terpercaya</div><div style={{color:"#666",fontSize:10,marginTop:2}}>5000+ teknisi • Rating • Maps</div>
          </a>
          <a href="/toko" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:12,textDecoration:"none"}}>
            <div style={{fontSize:18}}>🏪</div><div style={{color:"#fff",fontSize:12,fontWeight:700,marginTop:6}}>Toko Sparepart</div><div style={{color:"#666",fontSize:10,marginTop:2}}>Toko terpercaya • COD • Maps</div>
          </a>
          <a href="/produk" style={{background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:12,textDecoration:"none"}}>
            <div style={{fontSize:18}}>🛒</div><div style={{color:"#fff",fontSize:12,fontWeight:700,marginTop:6}}>Marketplace</div><div style={{color:"#666",fontSize:10,marginTop:2}}>Shopee • Tokopedia Affiliate</div>
          </a>
        </div>
      </section>

      {/* STATISTIK + TESTIMONI + CTA - MASTER PROMPT */}
      <section style={{padding:16,maxWidth:1100,margin:"0 auto"}}>
        <div style={{background:"linear-gradient(135deg,#0A0F1E,#0C1426)",border:"1px solid #1e2d4a",borderRadius:16,padding:16}}>
          <div style={{fontWeight:800,fontSize:13}}>📊 Statistik Portal</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10,marginTop:12}}>
            <div style={{textAlign:"center"}}><div style={{fontSize:18,fontWeight:900,color:"#0A84FF"}}>15K+</div><div style={{fontSize:9,color:"#666"}}>Firmware</div></div>
            <div style={{textAlign:"center"}}><div style={{fontSize:18,fontWeight:900,color:"#00AA5B"}}>500+</div><div style={{fontSize:9,color:"#666"}}>Artikel</div></div>
            <div style={{textAlign:"center"}}><div style={{fontSize:18,fontWeight:900,color:"#FFB800"}}>200+</div><div style={{fontSize:9,color:"#666"}}>Video</div></div>
            <div style={{textAlign:"center"}}><div style={{fontSize:18,fontWeight:900,color:"#FF3B30"}}>5K+</div><div style={{fontSize:9,color:"#666"}}>Teknisi</div></div>
          </div>
        </div>

        <div style={{marginTop:12,background:"linear-gradient(135deg,#0A84FF,#0066CC)",borderRadius:16,padding:16,textAlign:"center"}}>
          <div style={{fontWeight:800}}>Butuh Bantuan Service?</div>
          <div style={{fontSize:11,opacity:0.9,marginTop:4}}>Hubungi Admin • Live Chat • Tracking Service Luar Kota</div>
          <div style={{display:"flex",gap:8,marginTop:12,justifyContent:"center"}}>
            <a href="https://wa.me/6281234567890" style={{background:"#fff",color:"#0A84FF",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontSize:11,fontWeight:800}}>💬 WhatsApp</a>
            <a href="https://t.me/servitron" style={{background:"#00000044",border:"1px solid #fff44",color:"#fff",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontSize:11,fontWeight:700}}>✈️ Telegram</a>
          </div>
        </div>
      </section>

      {/* FOOTER PROFESIONAL - MASTER PROMPT */}
      <footer style={{background:"#080D1A",borderTop:"1px solid #1a2336",padding:20,marginTop:10}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",gap:10,alignItems:"center"}}><div style={{width:28,height:28,background:"#0A84FF",borderRadius:8,display:"grid",placeItems:"center",fontWeight:900,fontSize:12}}>S</div><div><div style={{fontWeight:800,fontSize:12}}>SERVITRON.ID</div><div style={{fontSize:9,color:"#666"}}>Portal Service Elektronik #1</div></div></div>
            <div style={{display:"flex",gap:8}}>
              <a href="#" style={{width:28,height:28,background:"#0C1426",borderRadius:8,display:"grid",placeItems:"center",textDecoration:"none",fontSize:12}}>▶️</a>
              <a href="#" style={{width:28,height:28,background:"#0C1426",borderRadius:8,display:"grid",placeItems:"center",textDecoration:"none",fontSize:12}}>📷</a>
              <a href="#" style={{width:28,height:28,background:"#0C1426",borderRadius:8,display:"grid",placeItems:"center",textDecoration:"none",fontSize:12}}>🎵</a>
            </div>
          </div>
          <div style={{marginTop:14,fontSize:10,color:"#555",lineHeight:1.6}}>Blog • Firmware (Anti Link Mati UUID) • Database Kerusakan • Video Tutorial • Direktori Teknisi • Toko Sparepart • Marketplace Affiliate Shopee/Tokopedia/TikTok • Dashboard Admin • Manajemen Stok • Service Luar Kota • Tracking • PWA Ready • SEO Friendly</div>
          <div style={{marginTop:12,textAlign:"center",fontSize:10,color:"#444"}}>© 2025 SERVITRON.ID • Next.js • NestJS • PostgreSQL • Cloudflare R2 • servitron-id-full-web.vercel.app</div>
        </div>
      </footer>
    </div>
  )
}
