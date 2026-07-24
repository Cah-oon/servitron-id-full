"use client";
import { useEffect, useState } from "react";

async function getOne(slug:string){
  const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/firmwares?select=*&model_slug=eq.${slug}`,{
    headers:{
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
    }
  });
  const j = await res.json();
  return j?.[0];
}

export default function Detail({ params }: { params: { slug: string } }) {
  const [fw, setFw] = useState<any>(null);
  const [showQRIS, setShowQRIS] = useState(false);
  const [paid, setPaid] = useState(false);
  useEffect(()=>{ getOne(params.slug).then(setFw); }, [params.slug]);
  if (!fw) return <div style={{padding:20,color:'#fff',background:'#050A14',minHeight:'100vh'}}>Loading {params.slug}...</div>;
  return (
    <div style={{background:'#050A14',minHeight:'100vh',color:'#fff',padding:16}}>
      <a href="/firmware" style={{color:'#888',fontSize:13}}>← Kembali</a>
      <h1 style={{fontSize:24,fontWeight:800,marginTop:16}}>{fw.brand} {fw.model}</h1>
      <p style={{color:'#0A84FF',fontSize:13}}>{fw.mainboard} | {fw.chipset} | {fw.size}</p>
      <div style={{background:'#0C1426',borderRadius:16,padding:16,marginTop:16,border:'1px solid #1a2336'}}>
        <div>BRAND: {fw.brand} | MODEL: {fw.model}</div>
        <div>MAINBOARD: {fw.mainboard}</div>
        <div>CHIPSET: {fw.chipset}</div>
        {!paid ? (
          <button onClick={()=>setShowQRIS(true)} style={{marginTop:20,width:'100%',height:48,borderRadius:12,background:'#00AA5B',color:'#fff',fontWeight:700,border:'none'}}>💳 Bayar QRIS Rp 15.000 - Download</button>
        ) : (
          <div style={{marginTop:20,background:'#0A84FF',padding:14,borderRadius:12,textAlign:'center',fontWeight:700}}>⬇️ Download {fw.model}.bin</div>
        )}
      </div>
      {showQRIS && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.85)',display:'grid',placeItems:'center',padding:16}} onClick={()=>setShowQRIS(false)}>
          <div style={{background:'#fff',color:'#000',borderRadius:20,padding:20,textAlign:'center',maxWidth:320}} onClick={e=>e.stopPropagation()}>
            <h3>Bayar QRIS Rp 15.000</h3>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=SERVITRON-${fw.model_slug}`} style={{margin:'16px auto'}}/>
            <button onClick={()=>{setPaid(true); setShowQRIS(false);}} style={{width:'100%',height:44,background:'#00AA5B',color:'#fff',borderRadius:10,border:'none',fontWeight:700}}>Saya Sudah Bayar</button>
          </div>
        </div>
      )}
    </div>
  )
}
