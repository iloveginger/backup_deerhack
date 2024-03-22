const mode = process.env.PRODUCTION ? "prod" : "dev";

console.info(`Currently Running in ${mode} Mode!`);

const BACKEND_URL = "http://localhost:1337";

let SERVER_URL: string;

const ANALYTICS_ID = "G-MZMTQJ9HQX";

if (mode == "dev") {
  SERVER_URL = "http://localhost:1337";
} else {
  SERVER_URL = "https://deerhack.deerwalk.edu.np";
}

const supaBaseConfig = {
  projectUrl: "https://fpcjfskxjhrksbwelapd.supabase.co",
  supabaseKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwY2pmc2t4amhya3Nid2VsYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMzA0MzAsImV4cCI6MjAyNDgwNjQzMH0.nMCu3H6u8XHKIe_bgNJynusqcvC6pyZoI1F34RDbNUw",
};

console.info(`Backend URL: ${BACKEND_URL} | Server URL: ${SERVER_URL}`);

export { BACKEND_URL, SERVER_URL, ANALYTICS_ID, supaBaseConfig };
