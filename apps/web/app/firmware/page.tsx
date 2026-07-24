"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function FirmwareList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: fw, error } = await supabase.from("firmwares").select("*").order("brand");
      console.log("supabase result", fw, error);
      if (fw) setData(fw);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div style={{background:'#050A14',minHeight:'100vh',color:'#fff',padding:20}}>Loading firmware dari Supabase...</div>;

  return (
    <div style={{background:'#050A14',minHeight:'100vh',color:'#fff'}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800&display=swap'); *{font-family:Inter,sans-serif}`}</style>
      <div style={{height:64,display:'flex',alignItems:'center',padding:'0 16px',borderBottom:'1px solid #111',background:'#080D1A',position:'sticky',top:0}}>
        <a href="/" style={{textDecoration:'none',color:'#fff',fontWeight:800}}>← SERVITRON.ID</a>
        <span style={{marginLeft:12,color:'#666',fontSize:13}}>/ Firmware ({data.length})</span>
      </div>
      <div style={{padding:16,maxWidth:1000,margin:'0 auto'}}>
        <h1 style={{fontSize:24,fontWeight:800}}>📁 Daftar Firmware ({data.length})</h1>
        <p style={{color:'#888',fontSize:13,marginTop:4}}>Data langsung dari Supabase servitron.id - {data.length} file</p>

        {data.length === 0 && (
          <div style={{marginTop:20,background:'#0C1426',padding:20,borderRadius:16, border:'1px dashed #333'}}>
            <p>❌ Tidak ada data! Cek:</p>
            <p style={{fontSize:12,color:'#888',marginTop:8}}>1. Vercel → Settings → Environment Variables → sudah ada NEXT_PUBLIC_SUPABASE_URL & ANON_KEY ?</p>
            <p style={{fontSize:12,color:'#888'}}>2. Supabase → Table firmwares ada 2 rows?</p>
          </div>
        )}

        <div style={{display:'grid',gap:12,marginTop:20}}>
          {data.map((fw:any)=>(
            <a key={fw.id} href={`/firmware/${fw.model_slug}`} style={{textDecoration:'none'}}>
              <div style={{background:'#0C1426',border:'1px solid rgba(255,255,255,0.06)',borderRadius:16,padding:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <div style={{fontWeight:700,color:'#fff'}}>{fw.brand} {fw.model}</div>
                  <div style={{fontSize:12,color:'#0A84FF',marginTop:2}}>{fw.mainboard} • {fw.chipset} • {fw.size}</div>
                  <div style={{fontSize:11,color:'#666',marginTop:4}}>{fw.model_slug}</div>
                </div>
                <div style={{background:'#0A84FF',color:'#fff',padding:'6px 12px',borderRadius:8,fontSize:12,fontWeight:700}}>Buka →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
