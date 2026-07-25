export default function SimplePage({ searchParams }: { searchParams?: any }) {
  return (
    <div style={{background:"#050A14",minHeight:"100vh",color:"#fff",fontFamily:"sans-serif"}}>
      <div style={{height:56,background:"#080D1A",borderBottom:"1px solid #1a2336",display:"flex",alignItems:"center",padding:"0 16px",gap:10}}>
        <a href="/" style={{color:"#fff",textDecoration:"none",fontWeight:900}}>SERVITRON.ID</a>
        <span style={{color:"#444"}}>/</span>
        <span style={{color:"#0A84FF",fontSize:13,fontWeight:700}}>COMING SOON</span>
      </div>
      <div style={{padding:40,textAlign:"center",maxWidth:600,margin:"0 auto"}}>
        <div style={{fontSize:50}}>🚀</div>
        <h1 style={{fontSize:20,fontWeight:800,marginTop:12}}>Fitur Master Prompt</h1>
        <p style={{color:"#888",fontSize:13,marginTop:8,lineHeight:1.6}}>
          Halaman ini bagian dari PORTAL SERVICE ELEKTRONIK TERBESAR INDONESIA.<br/>
          Sesuai master prompt: Blog + Firmware Anti Link Mati + Video + Teknisi + Toko + Affiliate + Dashboard Admin + Stok + Service Luar Kota.
        </p>
        <div style={{marginTop:20,background:"#0C1426",border:"1px solid #1e2d4a",borderRadius:14,padding:14,textAlign:"left",fontSize:11,color:"#666",lineHeight:1.8}}>
          ✅ UUID • Signed URL • Download Token • Temporary Link • Anti Hotlink<br/>
          ✅ ERD 50+ tabel • PostgreSQL • Redis • Prisma ORM<br/>
          ✅ Next.js • NestJS • Cloudflare R2 • S3<br/>
          ✅ SEO Schema.org • JSON-LD • PWA Ready<br/>
          ✅ Dashboard Admin • Role Permission • 2FA
        </div>
        <div style={{marginTop:20,display:"flex",gap:8,justifyContent:"center"}}>
          <a href="/" style={{background:"#0A84FF",color:"#fff",padding:"12px 20px",borderRadius:10,textDecoration:"none",fontSize:13,fontWeight:700}}>← Beranda</a>
          <a href="/firmware" style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"12px 20px",borderRadius:10,textDecoration:"none",fontSize:13}}>📁 Firmware</a>
          <a href="/blog" style={{background:"#0C1426",border:"1px solid #1e2d4a",color:"#fff",padding:"12px 20px",borderRadius:10,textDecoration:"none",fontSize:13}}>📝 Blog</a>
        </div>
      </div>
    </div>
  )
}
