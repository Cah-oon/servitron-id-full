"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const categories = [
    { name: "TV", count: "2.4k file", icon: "📺", c: "#0A84FF" },
    { name: "LED", count: "1.8k file", icon: "🖥️", c: "#8B5CF6" },
    { name: "LCD", count: "1.2k file", icon: "💻", c: "#06B6D4" },
    { name: "Smart TV", count: "3.1k file", icon: "📱", c: "#6366F1" },
    { name: "Mesin Cuci", count: "890 file", icon: "🌀", c: "#0EA5E9" },
    { name: "Kulkas", count: "650 file", icon: "❄️", c: "#14B8A6" },
    { name: "AC", count: "720 file", icon: "🌬️", c: "#38BDF8" },
    { name: "Laptop", count: "1.5k file", icon: "💻", c: "#8B5CF6" },
    { name: "Printer", count: "540 file", icon: "🖨️", c: "#64748B" },
    { name: "Audio", count: "980 file", icon: "🔊", c: "#FB7185" },
    { name: "Arduino", count: "2.1k file", icon: "🤖", c: "#10B981" },
    { name: "ESP32", count: "1.9k file", icon: "⚡", c: "#F59E0B" },
    { name: "IoT", count: "1.3k file", icon: "📶", c: "#0A84FF" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *{margin:0;padding:0;box-sizing:border-box;font-family:Inter,sans-serif}
        body{background:#050A14;color:white;overflow-x:hidden}
        .wrap{max-width:1280px;margin:0 auto;padding:0 16px;width:100%}
        .header{position:sticky;top:0;z-index:40;background:rgba(5,10,20,0.88);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,0.06);height:64px;display:flex;align-items:center}
        .logo-box{display:flex;align-items:center;gap:10px}
        .logo-icon{width:36px;height:36px;border-radius:10px;background:#0A84FF;display:grid;place-items:center;font-weight:900;font-size:16px}
        .logo-text{line-height:1}
        .logo-text b{font-size:16px;letter-spacing:-0.5px;display:block}
        .logo-text span{font-size:10px;color:#9CA3AF;letter-spacing:0.5px}
        .nav{font-size:13px;color:#9CA3AF;display:flex;gap:20px;align-items:center}
        .nav a:hover{color:white}
        .nav .active{color:white;font-weight:600}
        .hamburger{display:none;width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);color:white;cursor:pointer;font-size:20px}
        @media(max-width:900px){.nav{display:none}.hamburger{display:grid;place-items:center}}
        .mobile{position:absolute;top:64px;left:0;right:0;background:#0A1528;border-bottom:1px solid rgba(255,255,255,0.08);padding:16px;display:flex;flex-direction:column;gap:8px;z-index:30}
        .mobile a{padding:12px;border-radius:10px;color:#9CA3AF}
        .mobile a:hover{background:rgba(255,255,255,0.06);color:white}
        .hero{padding:28px 0 24px}
        .search-wrap{margin:0 auto;max-width:720px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:8px;display:flex;gap:8px}
        .search-wrap input{flex:1;min-width:0;height:48px;border-radius:12px;background:#111D2E;border:1px solid rgba(255,255,255,0.1);color:white;padding:0 16px;outline:none;font-size:14px}
        .search-wrap button{height:48px;padding:0 20px;border-radius:12px;background:#0A84FF;color:white;font-weight:700;border:none;cursor:pointer;white-space:nowrap}
        .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:24px auto 0;max-width:600px;text-align:center}
        .stats b{font-size:22px;display:block}
        .stats span{font-size:11px;color:#6B7280;font-family:monospace}
        .section{margin-top:32px}
        .sec-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
        .sec-head h2{font-size:20px;font-weight:800}
        .sec-head a{color:#0A84FF;font-size:12px}
        .cat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
        @media(min-width:600px){.cat-grid{grid-template-columns:repeat(3,1fr)}}
        @media(min-width:1000px){.cat-grid{grid-template-columns:repeat(4,1fr)}}
        .cat{background:#0C1426;border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:14px}
        .cat-icon{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;font-size:20px}
        .article-grid{display:grid;gap:16px}
        @media(min-width:768px){.article-grid{grid-template-columns:repeat(2,1fr)}}
        .article{background:#0C1426;border:1px solid rgba(255,255,255,0.06);border-radius:20px;overflow:hidden}
        .article-img{height:140px;display:grid;place-items:center;font-size:40px;opacity:0.5}
        .article-body{padding:14px}
        .fw-list{display:grid;gap:10px}
        .fw-item{background:#0C1426;border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:14px;display:flex;gap:12px;align-items:center}
        .fw-logo{width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,#0A84FF,#06B6D4);display:grid;place-items:center;font-weight:800;font-size:14px;flex-shrink:0}
        .fw-meta{font-size:11px;color:#6B7280;font-family:monospace;margin-top:4px;display:flex;gap:10px;flex-wrap:wrap}
        .badge{font-size:10px;padding:3px 8px;border-radius:999px;background:rgba(16,185,129,0.15);color:#34D399;border:1px solid rgba(16,185,129,0.2);font-family:monospace}
        .badge2{font-size:11px;padding:4px 10px;border-radius:999px;background:rgba(10,132,255,0.15);color:#60A5FA}
        .btn-dl{margin-left:auto;width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,0.06);border:none;color:white;display:grid;place-items:center;cursor:pointer;flex-shrink:0}
        .video-card{background:#0C1426;border:1px solid rgba(255,255,255,0.06);border-radius:20px;overflow:hidden}
        .video-thumb{height:180px;background:linear-gradient(135deg,#1E293B,#475569);display:grid;place-items:center;position:relative}
        .play{width:56px;height:56px;border-radius:50%;background:rgba(0,0,0,0.6);backdrop-filter:blur(8px);display:grid;place-items:center;font-size:20px}
        .tek-grid{display:grid;gap:10px}
        .tek-item{background:#0C1426;border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:14px;display:flex;gap:12px;align-items:center}
        .avatar{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#0A84FF,#06B6D4);display:grid;place-items:center;font-weight:800}
        .cta{display:grid;gap:12px}
        @media(min-width:768px){.cta{grid-template-columns:repeat(3,1fr)}}
        .cta-box{border-radius:20px;padding:20px;display:flex;gap:16px;align-items:center;color:white}
        .footer{background:#080D19;border-top:1px solid rgba(255,255,255,0.06);margin-top:40px;padding:32px 0}
        .footer-grid{display:grid;gap:28px}
        @media(min-width:768px){.footer-grid{grid-template-columns:1.5fr 1fr 1fr 1fr}}
        .footer h4{font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;color:#9CA3AF}
        .footer a{display:block;color:#6B7280;font-size:13px;margin-bottom:10px;text-decoration:none}
        .footer a:hover{color:white}
      `}</style>

      <div className="header">
        <div className="wrap" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className="logo-box">
            <div className="logo-icon">S</div>
            <div className="logo-text"><b>SERVITRON.ID</b><span>PUSAT SOLUSI ELEKTRONIK</span></div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:16}}>
            <div className="nav">
              <a className="active">Beranda</a><a>Blog</a><a>Firmware</a><a>Video</a><a>Teknisi</a><a>Toko</a><a>Marketplace</a><a>Forum</a>
            </div>
            <button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?'✕':'☰'}</button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile">
            <a>📁 Firmware</a><a>📝 Blog</a><a>🎥 Video Tutorial</a><a>👨‍🔧 Direktori Teknisi</a><a>🛒 Toko Sparepart</a><a>🏬 Marketplace</a><a>💬 Forum</a>
          </div>
        )}
      </div>

      <div className="wrap hero">
        <div style={{textAlign:'center',marginBottom:24}}>
          <div style={{display:'inline-flex',gap:8,alignItems:'center',padding:'6px 12px',borderRadius:999,background:'rgba(10,132,255,0.1)',border:'1px solid rgba(10,132,255,0.2)',fontSize:11,fontFamily:'monospace',color:'#60A5FA',marginBottom:16}}>
            <span style={{width:8,height:8,borderRadius:'50%',background:'#0A84FF',display:'inline-block'}}></span> API: https://api.servitron.id • LIVE
          </div>
          <h1 style={{fontSize:'clamp(28px,5vw,48px)',fontWeight:900,lineHeight:0.95,letterSpacing:-1.5}}>SOLUSI CEPAT UNTUK<br/><span style={{color:'#0A84FF'}}>TEKNISI</span><br/>INDONESIA</h1>
          <p style={{color:'#9CA3AF',maxWidth:600,margin:'12px auto 0',fontSize:14,lineHeight:1.6}}>Pusat Solusi Elektronik Indonesia. Ribuan firmware TV, dump EEPROM & skema terlengkap.</p>
        </div>

        <div className="search-wrap">
          <input placeholder="Cari tipe TV, IC, chassis, gejala kerusakan..." />
          <button>🔍 Cari Firmware</button>
        </div>

        <div className="stats">
          <div><b>128.450+</b><span>TOTAL FIRMWARE</span></div>
          <div><b>4.2 Jt+</b><span>DOWNLOAD</span></div>
          <div><b>18.320+</b><span>TEKNISI AKTIF</span></div>
        </div>

        <div className="section">
          <div className="sec-head"><h2>Kategori Populer</h2><span style={{fontSize:12,color:'#6B7280'}}>Jelajahi firmware dan panduan berdasarkan perangkat</span></div>
          <div className="cat-grid">
            {categories.map((c)=>(
              <div key={c.name} className="cat">
                <div className="cat-icon" style={{background:`linear-gradient(135deg,${c.c}22,${c.c}44)`}}>{c.icon}</div>
                <div style={{marginTop:12,fontWeight:700,fontSize:14}}>{c.name}</div>
                <div style={{fontSize:12,color:'#6B7280',fontFamily:'monospace',marginTop:2}}>{c.count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="sec-head"><h2>Artikel Terbaru</h2><a>Lihat Semua</a></div>
          <div className="article-grid">
            {[
              {t:'Cara Mengatasi TV Polytron U-Slim Proteck, Lampu Indikator Kedip',cat:'TV',time:'2 jam lalu',view:'12.4k',g:'linear-gradient(135deg,#2563EB,#22D3EE)'},
              {t:'Dump Firmware LG 32LJ500D Mainboard EAX67041501 Lengkap',cat:'Firmware',time:'5 jam lalu',view:'8.2k',g:'linear-gradient(135deg,#7C3AED,#818CF8)'},
              {t:'Mengenal IC T-Con dan Kerusakan Umum Pada Panel LED',cat:'Tips Service',time:'Kemarin',view:'15.1k',g:'linear-gradient(135deg,#059669,#2DD4BF)'},
              {t:'Skema Power Supply Mesin Cuci Samsung Inverter Terbaru',cat:'Mesin Cuci',time:'Kemarin',view:'6.7k',g:'linear-gradient(135deg,#475569,#94A3B8)'},
            ].map((a,i)=>(
              <div key={i} className="article">
                <div className="article-img" style={{background:a.g}}>🔧</div>
                <div className="article-body">
                  <span className="badge2" style={{fontSize:10}}>{a.cat}</span>
                  <div style={{marginTop:8,fontWeight:600,fontSize:14,lineHeight:1.4}}>{a.t}</div>
                  <div style={{marginTop:8,fontSize:11,color:'#6B7280',display:'flex',gap:12}}><span>🕒 {a.time}</span><span>👁️ {a.view}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="sec-head"><h2>Firmware Terbaru</h2><a style={{color:'#0A84FF'}}>Lihat antrean verifikasi →</a></div>
          <div style={{textAlign:'center',padding:'8px 0 12px',fontSize:12,color:'#0A84FF',border:'1px dashed rgba(10,132,255,0.2)',borderRadius:12,marginBottom:12}}>+ 126 firmware baru hari ini — Lihat antrean verifikasi</div>
          <div className="fw-list">
            {[
              {name:'Polytron PLD 32T7511',chip:'MSD3463-T5A6',type:'MSD3463',size:'8 MB',dl:'4.2k',ver:'V1.0.8',logo:'PO'},
              {name:'LG 43LK5000PTA',chip:'EAX67872801',type:'MT5658',size:'16 MB',dl:'9.1k',ver:'V3.2.1',logo:'LG'},
              {name:'Samsung UA32N4003',chip:'BN41-02568B',type:'NT72312',size:'8 MB',dl:'3.7k',ver:'V2.0.4',logo:'SA'},
              {name:'Sharp LC-32LE185I',chip:'TP.MS3463S.PB801',type:'MSD3463',size:'4 MB',dl:'5.5k',ver:'V1.1.0',logo:'SH'},
            ].map((f)=>(
              <div key={f.name} className="fw-item">
                <div className="fw-logo">{f.logo}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}><span style={{fontWeight:700,fontSize:14}}>{f.name}</span><span className="badge">{f.ver}</span></div>
                  <div className="fw-meta"><span>{f.chip}</span><span style={{background:'rgba(10,132,255,0.15)',color:'#60A5FA',padding:'2px 8px',borderRadius:999}}>{f.type}</span></div>
                  <div className="fw-meta"><span>{f.size}</span><span>• {f.dl} ↓</span><span>• MD5 ✓</span></div>
                </div>
                <button className="btn-dl">⬇️</button>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="sec-head"><h2>Video Tutorial Terbaru</h2></div>
          <div className="video-card">
            <div className="video-thumb"><div className="play">▶️</div><span style={{position:'absolute',bottom:12,left:12,background:'rgba(0,0,0,0.6)',padding:'4px 8px',borderRadius:6,fontSize:12,fontFamily:'monospace'}}>14:32</span><span style={{position:'absolute',bottom:12,right:12,background:'rgba(0,0,0,0.6)',padding:'4px 8px',borderRadius:6,fontSize:12}}>45k views</span></div>
            <div style={{padding:14}}><div style={{fontWeight:700,fontSize:14}}>TV LG 32 Inch Gambar Hilang Suara Ada - Analisis T-Con</div><div style={{fontSize:11,color:'#6B7280',marginTop:6,fontFamily:'monospace'}}>Servisology • Error • Solusi</div></div>
          </div>
        </div>

        <div className="section">
          <div className="sec-head"><h2>Teknisi Terpercaya</h2></div>
          <div className="tek-grid">
            {[
              {name:'Budi Service',area:'Jakarta Timur • 12 Tahun',rate:'4.9',job:'1240 job',init:'BS'},
              {name:'Anugrah Elektronik',area:'Surabaya • 8 Tahun',rate:'4.8',job:'890 job',init:'AE'},
              {name:'Mitra Teknik AC',area:'Bandung • 15 Tahun',rate:'4.9',job:'2100 job',init:'MT'},
            ].map((t)=>(
              <div key={t.name} className="tek-item">
                <div className="avatar">{t.init}</div>
                <div style={{flex:1}}><div style={{fontWeight:700,fontSize:14,display:'flex',gap:6,alignItems:'center'}}>{t.name} <span style={{color:'#0A84FF'}}>✔️</span></div><div style={{fontSize:11,color:'#6B7280'}}>📍 {t.area}</div></div>
                <div style={{textAlign:'right'}}><div style={{color:'#FBBF24',fontWeight:700}}>⭐ {t.rate}</div><div style={{fontSize:11,color:'#6B7280',fontFamily:'monospace'}}>{t.job}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="sec-head"><h2>Toko Terpercaya</h2></div>
          <div style={{display:'grid',gap:12}}>
            {[
              {name:'Jaya IC Center',loc:'Glodok, Jakarta',prod:'2.3k Produk',rate:'4.9'},
              {name:'Sinar Panel LED',loc:'Surabaya',prod:'1.1k Produk',rate:'4.7'},
            ].map((t)=>(
              <div key={t.name} className="article" style={{padding:0}}>
                <div style={{height:80,background:'linear-gradient(135deg,#2563EB,#4F46E5)'}}></div>
                <div style={{padding:14}}><div style={{fontWeight:700}}>{t.name}</div><div style={{fontSize:12,color:'#6B7280'}}>📍 {t.loc}</div><div style={{display:'flex',justifyContent:'space-between',marginTop:8,fontSize:12,color:'#6B7280',fontFamily:'monospace'}}><span>{t.prod}</span><span style={{color:'#FBBF24'}}>⭐ {t.rate}</span></div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(1,1fr)'}}>
            {[
              {name:'Universal Mainboard MS3663T',price:'Rp 185.000',orig:'Rp 245.000',disc:'-24%',store:'Shopee'},
              {name:'Backlight LED 32 inch 6V 6K',price:'Rp 95.000',orig:'Rp 120.000',disc:'-21%',store:'Tokopedia'},
              {name:'Modul ESP32 DevKit V1',price:'Rp 58.000',orig:'Rp 75.000',disc:'-23%',store:'TikTok Shop'},
            ].map((p)=>(
              <div key={p.name} className="fw-item">
                <div style={{width:64,height:64,borderRadius:12,background:'#1E293B',display:'grid',placeItems:'center',fontSize:24}}>📦</div>
                <div style={{flex:1}}><div style={{fontWeight:600,fontSize:13}}>{p.name}</div><div style={{marginTop:4,display:'flex',gap:8,alignItems:'center'}}><span style={{color:'#0A84FF',fontWeight:700,fontSize:13}}>{p.price}</span><span style={{textDecoration:'line-through',fontSize:11,color:'#6B7280'}}>{p.orig}</span><span style={{background:'#EF4444',color:'white',fontSize:10,padding:'2px 6px',borderRadius:4}}>{p.disc}</span></div><div style={{marginTop:6,fontSize:11,color:'#6B7280'}}>{p.store}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="cta">
            <div className="cta-box" style={{background:'#25D366'}}><div style={{fontSize:28}}>💬</div><div style={{flex:1}}><b>Chat WhatsApp Admin</b><div style={{fontSize:11,opacity:0.9}}>Respon &lt; 3 menit • 08:00-22:00 WIB</div></div><span>↗️</span></div>
            <div className="cta-box" style={{background:'#229ED9'}}><div style={{fontSize:28}}>✈️</div><div style={{flex:1}}><b>Gabung Telegram</b><div style={{fontSize:11,opacity:0.9}}>18k+ member • Update firmware realtime</div></div><span>↗️</span></div>
            <div className="cta-box" style={{background:'#0C1426',border:'1px solid rgba(255,255,255,0.08)'}}><div style={{fontSize:28}}>📦</div><div style={{flex:1}}><b>Lacak Status Servis</b><div style={{fontSize:11,color:'#6B7280'}}>Masukkan resi • Update foto & video</div></div><span>›</span></div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="wrap footer-grid">
          <div>
            <div style={{display:'flex',gap:10,alignItems:'center'}}><div className="logo-icon" style={{width:36,height:36}}>S</div><b>SERVITRON.ID</b></div>
            <p style={{marginTop:12,fontSize:12,color:'#6B7280',lineHeight:1.6}}>Portal layanan elektronik & download firmware terbesar di Indonesia. Dibuat untuk teknisi, oleh teknisi. Aman, cepat, anti link mati dengan Signed URL & UUID.</p>
          </div>
          <div><h4>Layanan</h4><a>Download Firmware</a><a>Database Kerusakan</a><a>Video Tutorial</a><a>Direktori Teknisi</a><a>Toko Sparepart</a><a>Marketplace</a></div>
          <div><h4>Bantuan</h4><a>Cara Download</a><a>Lacak Servis</a><a>Form Service Luar Kota</a><a>Pembayaran QRIS/COD</a><a>FAQ</a><a>Kontak Admin</a></div>
          <div><h4>Perusahaan</h4><a>Tentang Kami</a><a>Karir Teknisi</a><a>Program Affiliate</a><a>Kebijakan Privasi</a><a>Syarat Layanan</a><a>Status Server</a></div>
        </div>
        <div className="wrap" style={{marginTop:24,paddingTop:20,borderTop:'1px solid rgba(255,255,255,0.06)',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8,fontSize:11,color:'#4B5563',fontFamily:'monospace'}}>
          <span>© 2026 SERVITRON.ID • Dibuat dengan 🔧 di Indonesia • v2.4.1 • Enterprise Ready</span><span>🇮🇩 ID • SEO • Schema.org • CWV 98</span>
        </div>
      </div>
    </>
  );
}
