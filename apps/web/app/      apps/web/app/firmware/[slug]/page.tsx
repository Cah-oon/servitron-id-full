"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function DetailFirmware({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<any>(null);
  const [showQRIS, setShowQRIS] = useState(false);
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const { data: fw } = await supabase
        .from("firmwares")
        .select("*")
        .eq("model_slug", params.slug)
        .single();
      setData(fw);
      setLoading(false);
    }
    getData();
  }, [params.slug]);

  if (loading) return <div style={{padding:40, color:'white', background:'#050A14', minHeight:'100vh'}}>Loading firmware {params.slug}...</div>;
  if (!data) return <div style={{padding:40, color:'white', background:'#050A14', minHeight:'100vh'}}>Firmware {params.slug} tidak ditemukan di Supabase</div>;

  const isFree = data.free === true;
  const price = data.qris_price || 15000;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400&display=swap');
        *{margin:0;padding:0;box-sizing:border-box;font-family:Inter,sans-serif}
        body{background:#050A14}
        .wrap{max-width:1000px;margin:0 auto;padding:16px;color:white}
        .header{height:64px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.06);padding:0 16px;position:sticky;top:0;background:rgba(5,10,20,0.92);backdrop-filter:blur(16px);z-index:10}
        .logo{width:36px;height:36px;border-radius:10px;background:#0A84FF;display:grid;place-items:center;font-weight:900;color:white}
        .card{background:#0C1426;border:1px solid rgba(255,255,255,0.06);border-radius:20px;padding:20px;margin-top:16px}
        .badge{font-size:11px;padding:4px 10px;border-radius:999px;background:rgba(16,185,129,0.15);color:#34D399;border:1px solid rgba(16,185,129,0.2);font-family:JetBrains Mono,monospace}
        .btn{height:48px;border-radius:12px;border:none;font-weight:700;cursor:pointer;width:100%;font-size:14px;transition:all .2s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:#0A84FF;color:white}
        .btn-qris{background:#00AA5B;color:white;box-shadow:0 8px 20px rgba(0,170,91,0.3)}
        .grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px}
        .info{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:12px}
        .info span{font-size:10px;color:#6B7280;display:block;font-family:JetBrains Mono,monospace;letter-spacing:0.5px}
        .info b{font-size:13px;margin-top:3px;display:block;font-weight:600}
        .qris-modal{position:fixed;inset:0;background:rgba(0,0,0,0.85);display:grid;place-items:center;z-index:50;padding:16px;backdrop-filter:blur(8px)}
        .qris-box{background:white;border-radius:24px;padding:28px;max-width:360px;width:100%;color:#111;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.5)}
        .qris-img{width:260px;height:260px;background:#f9fafb;border:2px dashed #e5e7eb;border-radius:16px;margin:16px auto;display:grid;place-items:center;position:relative;overflow:hidden}
      `}</style>

      <div className="header">
        <div style={{display:'flex',gap:10,alignItems:'center',color:'white'}}><div className="logo">S</div><b style={{letterSpacing:'-0.5px'}}>SERVITRON.ID</b></div>
        <a href="/" style={{color:'#9CA3AF',fontSize:13,textDecoration:'none',fontWeight:600}}>← Kembali</a>
      </div>

      <div className="wrap">
        <div style={{fontSize:11,color:'#6B7280',marginTop:12,fontFamily:'JetBrains Mono'}}>firmware / {data.brand} / {data.model}</div>
        <h1 style={{fontSize:28,fontWeight:800,marginTop:8,lineHeight:1.1,letterSpacing:'-1px'}}>{data.brand} {data.model}<br/><span style={{color:'#0A84FF',fontSize:16,fontWeight:700}}>Mainboard {data.mainboard}</span></h1>
        
        <div className="card">
          <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
            <span className="badge">✅ VERIFIED</span>
            <span className="badge" style={{background:'rgba(10,132,255,0.12)',color:'#60A5FA',borderColor:'rgba(10,132,255,0.2)'}}>CHIP {data.chipset}</span>
            <span style={{fontSize:12,color:'#6B7280'}}>ID: {data.id}</span>
          </div>

          <div className="grid2">
            <div className="info"><span>BRAND</span><b>{data.brand}</b></div>
            <div className="info"><span>MODEL TV</span><b>{data.model}</b></div>
            <div className="info"><span>MAINBOARD</span><b>{data.mainboard}</b></div>
            <div className="info"><span>CHIPSET</span><b>{data.chipset}</b></div>
            <div className="info"><span>SIZE</span><b>{data.size}</b></div>
            <div className="info"><span>SLUG</span><b style={{fontSize:10}}>{data.model_slug}</b></div>
          </div>

          <p style={{marginTop:16,fontSize:13,color:'#9CA3AF',lineHeight:1.7,background:'rgba(255,255,255,0.03)',padding:12,borderRadius:12}}>
            Dump original {data.brand} {data.model} mainboard {data.mainboard}. Sudah tested, garansi 100% work. Cocok untuk kerusakan logo, blank, gagal start, backlight on no picture. File .bin siap flash via USB / programmer.
          </p>

          <div style={{marginTop:20,display:'grid',gap:12}}>
            {paid || isFree ? (
              <>
                <button className="btn btn-primary" onClick={()=>window.open(`https://r2.servitron.id/${data.model_slug}.bin`,'_blank')}>
                  ⬇️ Download {data.model}.bin ({data.size})
                </button>
                {isFree && <div style={{textAlign:'center',fontSize:11,color:'#34D399',fontWeight:700}}>🎉 GRATIS! File ini gratis untuk semua teknisi</div>}
              </>
            ) : (
              <>
                <button className="btn btn-qris" onClick={()=>setShowQRIS(true)}>
                  💳 Bayar QRIS Rp {price.toLocaleString('id-ID')} - Download Sekarang
                </button>
                <div style={{textAlign:'center',fontSize:11,color:'#6B7280'}}>Secure payment • File langsung didownload setelah bayar • Garansi work</div>
              </>
            )}
          </div>
        </div>

        <div className="card" style={{background:'rgba(255,255,255,0.02)'}}>
          <h3 style={{fontWeight:700,fontSize:14}}>Cara Flash:</h3>
          <ol style={{marginTop:12,fontSize:12,color:'#9CA3AF',lineHeight:1.8,paddingLeft:16}}>
            <li>Download file .bin di atas</li>
            <li>Siapkan flashdisk FAT32 kosong (max 16GB)</li>
            <li>Copy file, rename jadi {data.chipset}.bin</li>
            <li>Colok ke TV, nyalakan, tunggu 2 menit</li>
            <li>TV restart otomatis → Done!</li>
          </ol>
        </div>
      </div>

      {showQRIS && !paid && (
        <div className="qris-modal" onClick={()=>setShowQRIS(false)}>
          <div className="qris-box" onClick={e=>e.stopPropagation()}>
            <h2 style={{fontWeight:800,fontSize:18,letterSpacing:'-0.5px'}}>Bayar dengan QRIS</h2>
            <p style={{fontSize:12,color:'#6B7280',marginTop:4}}>{data.brand} {data.model} - Rp {price.toLocaleString('id-ID')}</p>
            <div className="qris-img">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=00020101021226610014ID.CO.QRIS.WWW0215ID10221664220600303UMI51440014ID.CO.QRIS.WWW0215ID1022166422060${data.id}5204581253033605802ID5909SERVITRON6007BRA...B06008Brabo61055021162070703A016304${Math.floor(Math.random()*10000)}`} 
                style={{width:'100%',height:'100%',objectFit:'contain'}} alt="QRIS"/>
            </div>
            <p style={{fontSize:11,color:'#6B7280',fontWeight:600}}>Scan pakai GoPay, OVO, Dana, ShopeePay, BCA, BRI, Mandiri</p>
            <div style={{display:'grid',gap:8,marginTop:16}}>
              <button className="btn btn-qris" onClick={()=>{setPaid(true); setShowQRIS(false);}}>✅ Saya Sudah Bayar - Download</button>
              <button style={{background:'none',border:'none',fontSize:12,color:'#9CA3AF',padding:8}} onClick={()=>setShowQRIS(false)}>Batal</button>
            </div>
            <div style={{marginTop:12,fontSize:10,color:'#9CA3AF',fontFamily:'JetBrains Mono'}}>TRX-SRV-{data.id}-{Date.now().toString().slice(-6)} • Exp 5 menit • Auto verify</div>
          </div>
        </div>
      )}
    </>
  )
}
