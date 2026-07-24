"use client";
import { useEffect, useState } from "react";

const URL = "https://uxdpgqlkdpyshywilfvv.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ZHBncWxrZHB5c2h5d2lsZnZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNTM0NjYsImV4cCI6MjA2ODgyOTQ2Nn0.vrP3r1ZQyLx8z2R3uE9q9e2Q4p4k4k4k"; // ganti dengan anon key kamu

// Pakai fetch langsung, tidak perlu @supabase-js
async function getFirmwares() {
  const r = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/firmwares?select=*&order=brand.asc`, {
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
    }
  });
  return r.json();
}

export default function FirmwareList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFirmwares().then(d => { setData(d || []); setLoading(false); }).catch(()=>setLoading(false));
  }, []);

  if (loading) return <div style={{background:'#050A14',minHeight:'100vh',color:'#fff',padding:20}}>Loading firmware dari Supabase...</div>;

  return (
    <div style={{background:'#050A14',minHeight:'100vh',color:'#fff'}}>
      <div style={{height:64,display:'flex',alignItems:'center',padding:'0 16px',borderBottom:'1px solid #1a2336',background:'#080D1A',position:'sticky',top:0}}>
        <a href="/" style={{textDecoration:'none',color:'#fff',fontWeight:800}}>← SERVITRON.ID</a>
        <span style={{marginLeft:12,color:'#666',fontSize:13}}>/ Firmware ({data.length})</span>
      </div>
      <div style={{padding:16,maxWidth:1000,margin:'0 auto'}}>
        <h1 style={{fontSize:22,fontWeight:800}}>📁 Daftar Firmware ({data.length})</h1>
        <p style={{color:'#666',fontSize:12,marginTop:4}}>Live dari Supabase • QRIS Ready</p>
        <div style={{display:'grid',gap:12,marginTop:20}}>
          {data.map((fw:any)=>(
            <a key={fw.id} href={`/firmware/${fw.model_slug}`} style={{textDecoration:'none'}}>
              <div style={{background:'#0C1426',border:'1px solid #1e2d4a',borderRadius:16,padding:16,display:'flex',justifyContent:'space-between'}}>
                <div>
                  <div style={{fontWeight:700,color:'#fff'}}>{fw.brand} {fw.model}</div>
                  <div style={{fontSize:12,color:'#0A84FF',marginTop:4}}>{fw.mainboard} • {fw.chipset} • {fw.size}</div>
                </div>
                <div style={{background:'#0A84FF',color:'#fff',padding:'6px 12px',borderRadius:8,fontSize:12,fontWeight:700,height:'fit-content'}}>Buka</div>
              </div>
            </a>
          ))}
        </div>
        {data.length===0 && <div style={{marginTop:20,color:'#f66'}}>Belum ada data, cek RLS / ENV</div>}
      </div>
    </div>
  )
}
