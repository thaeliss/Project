// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
fightingApp.factory('Fight',function ($resource, $cookieStore) {
  	
	this.courselistDD = {
    "department": "CSC/Datalogi",
    "courses": [
            {
            "code": "2D5346",
            "title": "ANN med lokaliserad representation",
            "href": "http://www.kth.se/student/kurser/kurs/2D5346",
            "info": "",
            "credits": "6,0",
            "level": "ForskarnivÃ¥"
        },
            {
            "code": "2D5324",
            "title": "Programstrukturer - intensivkurs",
            "href": "http://www.kth.se/student/kurser/kurs/2D5324",
            "info": "",
            "credits": "6,0",
            "level": "ForskarnivÃ¥"
        },
            {
            "code": "DD3324",
            "title": "Programstrukturer - intensivkurs",
            "href": "http://www.kth.se/student/kurser/kurs/DD3324",
            "info": "",
            "credits": "6,0",
            "level": "ForskarnivÃ¥"
        },
            {
            "code": "DD2388",
            "title": "Programsystemkonstruktion med .NET Framework",
            "href": "http://www.kth.se/student/kurser/kurs/DD2388",
            "info": "<p>Kursen &#228;r en forts&#228;ttningskurs i datalogi som ger en god &#246;versikt &#246;ver och tr&#228;ning i Microsofts .NET-teknologi. Kraven som st&#228;llts p&#229; utvecklare i .NET &#228;r vitt skilda, fr&#229;n RAD (Rapid Application Development) till l&#229;ngsiktigt h&#229;llbara aff&#228;rssystem. Kursen har som ambition att s&#229; v&#228;l som m&#246;jligt, givet den avsatta tiden, f&#246;rbereda er p&#229; n&#228;ringslivets krav p&#229; utveckling med .NET-plattformen.<\/p>",
            "credits": "7,5",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DD2387",
            "title": "Programsystemkonstruktion med C++",
            "href": "http://www.kth.se/student/kurser/kurs/DD2387",
            "info": "<p>En forts&#228;ttningskurs i datalogi som ger goda kunskaper i spr&#229;ket C++ och behandlar tekniker f&#246;r effektiv konstruktion av stora programsystem i C++.<\/p>",
            "credits": "6,0",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DD2385",
            "title": "Programutvecklingsteknik",
            "href": "http://www.kth.se/student/kurser/kurs/DD2385",
            "info": "<p>En forts&#228;ttningskurs i datalogi som behandlar objektorienterad programmering i Java, objektorienterad modellering och analys,&#160;programutveckling med designm&#246;nster samt avancerade klassbibliotek&#160;i Java.<\/p>",
            "credits": "6,0",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DD2460",
            "title": "ProgramvarusÃ¤kerhet",
            "href": "http://www.kth.se/student/kurser/kurs/DD2460",
            "info": "<p>Programvarus&#228;kerhet handlar om att s&#228;kerst&#228;lla att programvaran i ett s&#228;kerhetskritisk system beter sig p&#229; ett korrekt och tillf&#246;rlitligt s&#228;tt. Detta kan betyda att programvaran inte l&#229;ter obeh&#246;riga f&#229; tillg&#229;ng till data de inte har beh&#246;righet till, eller att programvaran &#228;r fri fr&#229;n programfel som deadlocks eller buffer overflows. De huvudsakliga teknikerna som anv&#228;nds f&#246;r programvarus&#228;kerhet &#228;r statisk analys, &#246;vervakning, och testning. I kursen behandlas flera grundl&#228;ggande tekniker f&#246;r programvarus&#228;kerhet. Fokus &#228;r p&#229; tekniker baserade p&#229; olika former av statisk analys, inklusive logik och typsystem, som till&#229;ter att statisk uppt&#228;cka vissa typer av olagligt beteende eller att bevisa fr&#229;nvaron av s&#229;dan beteenden. I kursen behandlas flera verktyg som med framg&#229;ng har anv&#228;nts f&#246;r att genomf&#246;ra s&#229;dana analyser.<\/p>",
            "credits": "7,5",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DD2459",
            "title": "ProgramvarutillfÃ¶rlitlighet",
            "href": "http://www.kth.se/student/kurser/kurs/DD2459",
            "info": "<p>The subject matter of this course concerns modern and practical techniques for software testing and reliability modeling, suitable for the working software engineer.<\/p><p>Software testing concerns the problem of analyzing and evaluating software products to reach some conclusion about their fitness for use. For safety critical, mission critical and enterprise critical systems development it is nowadays essential to have some form of software quality assurance measures in place within an IT project. Quality assurance measures may involve both managerial and technical procedures. However, the primary focus of this course will be on technical procedures to predict, discover and diagnose errors in software systems.<\/p>",
            "credits": "7,5",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "2D5333",
            "title": "Programverifiering",
            "href": "http://www.kth.se/student/kurser/kurs/2D5333",
            "info": "",
            "credits": "6,0",
            "level": "ForskarnivÃ¥"
        },
            {
            "code": "DD3333",
            "title": "Programverifiering",
            "href": "http://www.kth.se/student/kurser/kurs/DD3333",
            "info": "",
            "credits": "6,0",
            "level": "ForskarnivÃ¥"
        },
            {
            "code": "DD1347",
            "title": "Projektuppgift i datalogi",
            "href": "http://www.kth.se/student/kurser/kurs/DD1347",
            "info": "",
            "credits": "3,0",
            "level": "GrundnivÃ¥"
        },
    	]
	}
	
	this.courselistDA = {
    "department": "CSC/Datavetenskap och kommunikation",
    "courses": [
            {
            "code": "DA221X",
            "title": "Examensarbete inom datavetenskap och kommunikation, avancerad nivÃ¥",
            "href": "http://www.kth.se/student/kurser/kurs/DA221X",
            "info": "",
            "credits": "30,0",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DA222X",
            "title": "Examensarbete inom datavetenskap och kommunikation, avancerad nivÃ¥",
            "href": "http://www.kth.se/student/kurser/kurs/DA222X",
            "info": "",
            "credits": "30,0",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DA223X",
            "title": "Examensarbete inom datavetenskap och kommunikation, avancerad nivÃ¥",
            "href": "http://www.kth.se/student/kurser/kurs/DA223X",
            "info": "",
            "credits": "30,0",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DA224X",
            "title": "Examensarbete inom datavetenskap och kommunikation, avancerad nivÃ¥",
            "href": "http://www.kth.se/student/kurser/kurs/DA224X",
            "info": "",
            "credits": "30,0",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DA225X",
            "title": "Examensarbete inom datavetenskap och kommunikation, avancerad nivÃ¥",
            "href": "http://www.kth.se/student/kurser/kurs/DA225X",
            "info": "",
            "credits": "30,0",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DA226X",
            "title": "Examensarbete inom datavetenskap och kommunikation, avancerad nivÃ¥",
            "href": "http://www.kth.se/student/kurser/kurs/DA226X",
            "info": "",
            "credits": "30,0",
            "level": "Avancerad nivÃ¥"
        },
            {
            "code": "DA1003",
            "title": "Individuell kompletteringskurs A",
            "href": "http://www.kth.se/student/kurser/kurs/DA1003",
            "info": "",
            "credits": "3,0",
            "level": "GrundnivÃ¥"
        },
            {
            "code": "DA1004",
            "title": "Individuell kompletteringskurs B",
            "href": "http://www.kth.se/student/kurser/kurs/DA1004",
            "info": "",
            "credits": "4,5",
            "level": "GrundnivÃ¥"
        },
            {
            "code": "DA1006",
            "title": "Individuell kompletteringskurs C",
            "href": "http://www.kth.se/student/kurser/kurs/DA1006",
            "info": "",
            "credits": "6,0",
            "level": "GrundnivÃ¥"
        },
            {
            "code": "DA1007",
            "title": "Individuell kompletteringskurs D",
            "href": "http://www.kth.se/student/kurser/kurs/DA1007",
            "info": "",
            "credits": "7,5",
            "level": "GrundnivÃ¥"
        },
            {
            "code": "DA1009",
            "title": "Individuell kompletteringskurs E",
            "href": "http://www.kth.se/student/kurser/kurs/DA1009",
            "info": "",
            "credits": "9,0",
            "level": "GrundnivÃ¥"
        },
            {
            "code": "DA1012",
            "title": "Individuell kompletteringskurs F",
            "href": "http://www.kth.se/student/kurser/kurs/DA1012",
            "info": "",
            "credits": "12,0",
            "level": "GrundnivÃ¥"
        },
            {
            "code": "DA3600",
            "title": "TillÃ¤mpad pedagogik",
            "href": "http://www.kth.se/student/kurser/kurs/DA3600",
            "info": "",
            "credits": "1,5",
            "level": "ForskarnivÃ¥"
        },
            {
            "code": "2D5600",
            "title": "TillÃ¤mpad pedagogik fÃ¶r doktorander",
            "href": "http://www.kth.se/student/kurser/kurs/2D5600",
            "info": "",
            "credits": "1,5",
            "level": "ForskarnivÃ¥"
        },
            {
            "code": "DA2205",
            "title": "Vetenskapsteori och forskningsmetodik",
            "href": "http://www.kth.se/student/kurser/kurs/DA2205",
            "info": "",
            "credits": "7,5",
            "level": "Avancerad nivÃ¥"
        }
    ]
}
	
	
	this.departments = [
            {"code": "DA",
        "name": "Datavetenskap och kommunikation"},
                {"code": "DD",
        "name": "Datalogi"},
                {"code": "DH",
        "name": "MÃ¤nniska-datorinteraktion"},
                {"code": "DM",
        "name": "Medieteknik och grafisk produktion"},
                {"code": "DME",
        "name": "Medieteknik och interaktionsdesign"},
                {"code": "DN",
        "name": "Numerisk analys"},
                {"code": "DT",
        "name": "Tal, musik och hÃ¶rsel"}
		]
	

	
  	return this;

});