export { auth as middleware } from "@/auth";
// WARNING: change name from "middleware.ts" to "_middleware.ts"
//check next-auth@5.0.0..beta this present some problems with "edge functions" like
//the file "./node_modules/.prisma/client/wasm-edge-light-loader.js"
