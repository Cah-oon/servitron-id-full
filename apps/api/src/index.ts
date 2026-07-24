// SERVITRON.ID API - Cloudflare Worker / Node
import { Hono } from "hono";
const app=new Hono();
app.get("/",(c)=>c.json({status:"LIVE",api:"https://api.servitron.id",version:"v2.4.1"}));
app.get("/firmware",(c)=>c.json([{id:1,model:"PLD 32T7511",brand:"Polytron"}]));
export default app;
