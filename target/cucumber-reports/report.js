$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Bing.feature");
formatter.feature({
  "name": "Web Automation Test on bing",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open bing page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I opened \"http://bing.com\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BackgroundSteps.iOpenedBingPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Assert page title, header and search bar",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BackgroundSteps.assertPageTitleHeaderAndSearchBar()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Get first 50 \"Trending on bing\" results",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Return titles, links URLs, image URLs of the Trending On Bing section",
  "keyword": "When "
});
formatter.match({
  "location": "steps.TrendingOnBingSteps.returnTitlesLinksURLsImageURLsOfTheTrendingOnBingSection()"
});
formatter.write("Title: Animal Político\nURL: https://www.msn.com/es-mx/noticias/mexico/la-estafa-maestra-rosario-robles-buscar%C3%A1-volverse-testigo-de-fgr-a-cambio-de-alg%C3%BAn-beneficio/ar-BB1bi1S0?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bibBJ.img\u0026ehk\u003dwHIqQcJGZPaO8mP6cd1B54E%2b%2fuoEH8VCbZbysHw379s%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Excelsior\nURL: https://www.msn.com/es-mx/noticias/mexico/reducir%C3%A1n-suministro-de-agua-en-13-alcald%C3%ADas-de-cdmx-y-13-municipios-de-edomex/ar-BB1bigl5?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bi1AB.img\u0026ehk\u003d2D20FFgmxq8aJWlvMs55UjPw6fG9RmcCbEsIUjnbSss%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Milenio\nURL: https://www.msn.com/es-mx/noticias/mexico/astrazeneca-presentar%C3%A1-ante-cofepris-datos-de-efectividad-de-vacuna-anticovid/ar-BB1bi7MF?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bi44r.img\u0026ehk\u003d%2fSKgzgqSXveyb94s7zLHCTQpbW%2fCgQZqry%2blugxRCGo%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Sin Embargo\nURL: https://www.msn.com/es-mx/noticias/mexico/ni%C3%B1a-de-12-a%C3%B1os-es-hallada-sin-vida-en-un-paraje-de-fresnillo-zacatecas-justiciaparasofia-exigen/ar-BB1bhmhd?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bhqkx.img\u0026ehk\u003dhlSb9gnPdeIXLBnCGCXXLgA%2fw5k2eAtwSiFpqU7NA7k%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Excelsior\nURL: https://www.msn.com/es-mx/noticias/mexico/caretas-y-acr%C3%ADlicos-en-casillas-para-elecciones-2021-iecm/ar-BB1bhVWq?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bi9Wr.img\u0026ehk\u003dP%2boLLfC%2bqx1bXYpA3gy2%2fGOxZe3wxGj9m3FCHt6ZiHk%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Sin Embargo\nURL: https://www.msn.com/es-mx/noticias/mexico/alerta-en-tabasco-el-usumacinta-el-r%C3%ADo-m%C3%A1s-caudaloso-de-m%C3%A9xico-ya-rebas%C3%B3-sus-niveles-hist%C3%B3ricos/ar-BB1bi4Zr?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bi2A9.img\u0026ehk\u003dWgSKVM%2benVYoSWoxXJfPWhnBXc9BnImattOaI1lacYY%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Animal Político\nURL: https://www.msn.com/es-mx/noticias/mexico/senadora-de-morena-organiza-foro-con-jaime-maussan-para-promover-cura-milagrosa-al-covid/ar-BB1bhVSj?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bi30g.img\u0026ehk\u003d8JnxA5r4uxUi25BDnUXq0ZyxLpbZ96m54Cwb12womRo%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Sin Embargo\nURL: https://www.msn.com/es-mx/noticias/mundo/caro-quintero-1-el-mayo-2-el-mencho-4-y-el-chapito-8-la-dea-tiene-nuevas-prioridades/ar-BB1bi003?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bhZZV.img\u0026ehk\u003d7zTN6C%2fQ82lTkKc2QhOZ5cZv4d9be8wqm3j0r4N9loo%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Reuters\nURL: https://www.msn.com/es-mx/noticias/coronavirus/pese-a-las-advertencias-los-viajes-en-avi%C3%B3n-aumentan-en-eeuu-antes-de-acci%C3%B3n-de-gracias/ar-BB1bhUIp?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bhtAM.img\u0026ehk\u003dkPNP5RhnX4muBgAaKmHxAACk8me77MxoD8PnA6sGCPY%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Reuters\nURL: https://www.msn.com/es-mx/noticias/elecciones-eeuu/biden-escoge-a-inmigrante-cubano-para-dirigir-la-seguridad-nacional-y-las-fronteras-de-eeuu/ar-BB1bhOVt?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bhYjS.img\u0026ehk\u003d30e%2blkhQswduodJS27rb%2fALX2%2bZP3I6T%2ba8PqogVGJc%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: La Jornada\nURL: https://www.msn.com/es-mx/noticias/mexico/solicitan-segunda-orden-de-aprehensi%C3%B3n-contra-roberto-sandoval-en-nayarit/ar-BB1bhYKR?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bhQAr.img\u0026ehk\u003dZJfUIHBmBk4UC3qtZuHGwXtj0Y6fVJ%2fj59C5Nx5YDYs%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: BBC News Mundo\nURL: https://www.msn.com/es-mx/noticias/coronavirus/vacunas-contra-el-coronavirus-las-fortalezas-y-debilidades-de-las-nueve-candidatas-m%C3%A1s-adelantadas/ar-BB1bePAO?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bePAL.img\u0026ehk\u003d2EkNReg%2b7f%2blDD53IE9VHdPvhw3GBYFrOEaUL8uH1VU%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Excelsior\nURL: https://www.msn.com/es-mx/noticias/elecciones-eeuu/biden-elige-a-cubanoamericano-como-jefe-de-seguridad-nacional/ar-BB1bhSgm?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bhUJQ.img\u0026ehk\u003dil%2brKLIFUSfvXUcUkBK9deA13%2fnrEbd5zmyasKtzU1g%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Reforma\nURL: https://www.msn.com/es-mx/noticias/mexico/encabeza-amlo-d%C3%ADa-de-la-armada/ar-BB1bhZif?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bi0hn.img\u0026ehk\u003dexX1Vem7nmJaFo%2b%2fBkElG6CVxkW9lPLGvASHgjEjYnY%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Reuters\nURL: https://www.msn.com/es-mx/noticias/elecciones-eeuu/biden-nombra-encargados-de-pol%C3%ADtica-exterior-y-seguridad-nacional/ar-BB1bhS2O?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bhXjz.img\u0026ehk\u003dtYhJb%2fPvVERNJ%2fF6k0LccRzlFgF%2fBuvQetqZQ0OLeoA%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Telediario\nURL: https://www.msn.com/es-mx/noticias/mundo/donald-trump-acepta-transici%C3%B3n-de-gobierno-a-joe-biden/ar-BB1bipN6?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1biktj.img\u0026ehk\u003dXI6oXNAzYnmBnKOv25AMPDytRHSIU4eO368bisJyhvQ%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Excelsior\nURL: https://www.msn.com/es-mx/noticias/mexico/rosario-robles-solicitar%C3%A1-ser-testigo-colaborador-de-la-fgr/ar-BB1bica0?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bisd3.img\u0026ehk\u003dawcsTnT8VUg1JaZoxeFSA858vHLyDzNetOZkNyP6TGQ%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: Sin Embargo\nURL: https://www.msn.com/es-mx/noticias/mexico/habr%C3%A1-reducci%C3%B3n-en-suministro-de-agua-en-8-alcald%C3%ADas-de-cdmx-y-13-municipios-del-edomex-sacmex/ar-BB1bi76S?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1biejO.img\u0026ehk\u003dpAhuR%2bURoXZH%2fp%2b7Pc3FmV0Y37SoKKceyJC37jA%2bs0U%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: UnoTV\nURL: https://www.msn.com/es-mx/noticias/mexico/en-vivo-situaci%C3%B3n-de-coronavirus-en-m%C3%A9xico-23-de-noviembre/ar-BB1bin1U?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bibZz.img\u0026ehk\u003dBgIr20nCRXPAAsUgB90jHy0unCI04YgR%2bzwmLbfV49Q%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: La Jornada\nURL: https://www.msn.com/es-mx/noticias/mundo/acepta-trump-transici%C3%B3n-presidencial-a-joe-biden/ar-BB1bi71X?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bimWK.img\u0026ehk\u003dLubXz22Q8Rs80qIuzt8y7NtMJxjopEKj7BH9m7v%2bol8%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.write("Title: BBC News Mundo\nURL: https://www.msn.com/es-mx/noticias/elecciones-eeuu/trump-autoriza-el-comienzo-de-la-transici%C3%B3n-hacia-el-nuevo-gobierno-de-biden/ar-BB1bie8k?ocid\u003dBingHPC\nImage: http://www.bing.com/th?u\u003dhttps%3a%2f%2fimg-s-msn-com.akamaized.net%2ftenant%2famp%2fentityid%2fBB1bimV8.img\u0026ehk\u003dnSdVpOI88Ddf%2f49nQQXt3NNBgjUF6YoQc9uqjNkjc2E%3d\u0026w\u003d150\u0026h\u003d150\u0026c\u003d8\u0026rs\u003d2\u0026pid\u003dWP0\n");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open bing page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I opened \"http://bing.com\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BackgroundSteps.iOpenedBingPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Assert page title, header and search bar",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BackgroundSteps.assertPageTitleHeaderAndSearchBar()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for Google Documents",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for \"Google Documents\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SearchForSteps.iSearchForSomething(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Return how many results were found",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SearchForSteps.returnHowManyResultsWereFound()"
});
formatter.write("Results Count: 2,110,000,000 Results");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I customize search date to be today",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SearchForSteps.iCustomizeSearchDateToBeToday()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Return search results on the first page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SearchForSteps.returnSearchResultsOnTheFirstPage()"
});
formatter.write("Results Count: 58 Results");
formatter.write("Write Your Best in Google Docs - Get Advanced Writing Feedback\nGoogle Docs\nDocumentos de Google: crea y edita documentos online de ...\nGoogle Docs - Wikipedia\nGoogle Drive - Wikipedia, la enciclopedia libre\nVideos of Google Documents\nApple and others does not want Google to see anti-trust ...\nGoogle Docs FastDL torrent download - 24/7 Virtual Assistants\nGoogle Classroom installer Download Torrent - PureSkin ...\nWrite Your Best in Google Docs - Get Advanced Writing Feedback");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I go to the \"News\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SearchForSteps.iGoToTheSomethingTab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Save the first result",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SearchForSteps.saveTheFirstResult()"
});
formatter.write("Saved: Las mejores alternativas a Google Docs");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I go to the \"All\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SearchForSteps.iGoToTheSomethingTab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Return search results on the first page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SearchForSteps.returnSearchResultsOnTheFirstPage()"
});
formatter.write("Results Count: 2,110,000,000 Results");
formatter.write("Write Your Best in Google Docs - Instant Writing Suggestions\nGoogle Docs\nDocumentos de Google: crea y edita documentos online de ...\nDocumentos de Google: crea y edita documentos en línea de ...\nGoogle Docs – create and edit documents online, for free.\nVideos of Google Documents\nGoogle\nGoogle Drive: Sign-in\nGoogle\nWrite Your Best in Google Docs - Instant Writing Suggestions");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I go to the \"News\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "steps.SearchForSteps.iGoToTheSomethingTab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Assert the first result",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SearchForSteps.assertTheFirstResult()"
});
formatter.write("Actual: Las mejores alternativas a Google Docs");
formatter.write("Expected: Las mejores alternativas a Google Docs");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", "");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});