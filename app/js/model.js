// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
fightingApp.factory('Fight',function ($resource, $cookieStore) {
  	
  	//Hardcoded courselist, will be replaced with calls to database using the departments code, i.e DD, DD, DH and so on
	this.courselistDD = {
    "department": "CSC/Datalogi",
    "courses": [
            {
            "code": "2D5346",
            "title": "ANN med lokaliserad representation",
            "href": "http://www.kth.se/student/kurser/kurs/2D5346",
            "info": "",
            "credits": "6,0",
            "level": "Forskarnivå"
        },
            {
            "code": "2D5324",
            "title": "Programstrukturer - intensivkurs",
            "href": "http://www.kth.se/student/kurser/kurs/2D5324",
            "info": "",
            "credits": "6,0",
            "level": "Forskarnivå"
        },
            {
            "code": "DD3324",
            "title": "Programstrukturer - intensivkurs",
            "href": "http://www.kth.se/student/kurser/kurs/DD3324",
            "info": "",
            "credits": "6,0",
            "level": "Forskarnivå"
        },
            {
            "code": "DD2388",
            "title": "Programsystemkonstruktion med .NET Framework",
            "href": "http://www.kth.se/student/kurser/kurs/DD2388",
            "info": "<p>Kursen är en fortsättningskurs i datalogi som ger en god översikt över och träning i Microsofts .NET-teknologi. Kraven som ställts på utvecklare i .NET är vitt skilda, från RAD (Rapid Application Development) till långsiktigt hållbara affärssystem. Kursen har som ambition att så väl som möjligt, givet den avsatta tiden, förbereda er på näringslivets krav på utveckling med .NET-plattformen.<\/p>",
            "credits": "7,5",
            "level": "Avancerad nivå"
        },           
    	]
	}
	//Hardcoded courselist, will be replaced with calls to database using the departments code, i.e DD, DD, DH and so on
	this.courselistDA = {
    "department": "CSC/Datavetenskap och kommunikation",
    "courses": [            
            {
            "code": "DA225X",
            "title": "Examensarbete inom datavetenskap och kommunikation, avancerad nivå",
            "href": "http://www.kth.se/student/kurser/kurs/DA225X",
            "info": "",
            "credits": "30,0",
            "level": "Avancerad nivå"
        },
            {
            "code": "DA1004",
            "title": "Individuell kompletteringskurs B",
            "href": "http://www.kth.se/student/kurser/kurs/DA1004",
            "info": "",
            "credits": "4,5",
            "level": "Grundnivå"
        },
            {
            "code": "2D5600",
            "title": "TillÃ¤mpad pedagogik fÃ¶r doktorander",
            "href": "http://www.kth.se/student/kurser/kurs/2D5600",
            "info": "",
            "credits": "1,5",
            "level": "Forskarnivå"
        },
            {
            "code": "DA2205",
            "title": "Vetenskapsteori och forskningsmetodik",
            "href": "http://www.kth.se/student/kurser/kurs/DA2205",
            "info": "",
            "credits": "7,5",
            "level": "Avancerad nivå"
        }           
    	]
	}
	//Hardcoded courselist, will be replaced with calls to database using the departments code, i.e DD, DD, DH and so on
	this.courselistDH = {
    "department": "CSC/MÃ¤nniska-datorinteraktion",
    "courses": [
            {
            "code": "2D5353",
            "title": "Aktivitets teori och mÃ¤nniska-dator interaktion",
            "href": "http://www.kth.se/student/kurser/kurs/2D5353",
            "info": "",
            "credits": "3,0",
            "level": "Forskarnivå"
        },
            {
            "code": "DH3353",
            "title": "Aktivitets teori och mÃ¤nniska-dator interaktion",
            "href": "http://www.kth.se/student/kurser/kurs/DH3353",
            "info": "",
            "credits": "3,0",
            "level": "Forskarnivå"
        },
            {
            "code": "2D5370",
            "title": "Aktuell forskning i MDI",
            "href": "http://www.kth.se/student/kurser/kurs/2D5370",
            "info": "",
            "credits": "7,5",
            "level": "Forskarnivå"
        },
            {
            "code": "DH3370",
            "title": "Aktuell forskning i MDI",
            "href": "http://www.kth.se/student/kurser/kurs/DH3370",
            "info": "",
            "credits": "7,5",
            "level": "Forskarnivå"
        },
        ]
	}
	//Hardcoded courselist, will be replaced with calls to database using the departments code, i.e DD, DD, DH and so on
	this.courselistDM = {
    "department": "CSC/Medieteknik och grafisk produktion",
    "courses": [
            {
            "code": "DM3510",
            "title": "Aktuell forskning i teknikfÃ¶rstÃ¤rkt lÃ¤rande",
            "href": "http://www.kth.se/student/kurser/kurs/DM3510",
            "info": "",
            "credits": "7,5",
            "level": "Forskarnivå"
        },
            {
            "code": "DM3516",
            "title": "Arbete - samhÃ¤lleliga utmaningar och framtida mÃ¶jligheter",
            "href": "http://www.kth.se/student/kurser/kurs/DM3516",
            "info": "",
            "credits": "7,5",
            "level": "Forskarnivå"
        },
            {
            "code": "2D5508",
            "title": "Forskarseminarier i medieteknik",
            "href": "http://www.kth.se/student/kurser/kurs/2D5508",
            "info": "",
            "credits": "6,0",
            "level": "Forskarnivå"
        },
            {
            "code": "DM3508",
            "title": "Forskarseminarier i medieteknik",
            "href": "http://www.kth.se/student/kurser/kurs/DM3508",
            "info": "",
            "credits": "6,0",
            "level": "Forskarnivå"
        }
        ]
	}
	
	//Hardcoded list of departments, will be replaced with a call to database on http://www.kth.se/api/kopps/v2/departments.sv.json
	this.departments = [
            {"code": "DA",
        "name": "Datavetenskap och kommunikation"},
                {"code": "DD",
        "name": "Datalogi"},
                {"code": "DH",
        "name": "Människa-datorinteraktion"},
                {"code": "DM",
        "name": "Medieteknik och grafisk produktion"},
                {"code": "DME",
        "name": "Medieteknik och interaktionsdesign"},
                {"code": "DN",
        "name": "Numerisk analys"},
                {"code": "DT",
        "name": "Tal, musik och hörsel"}
		]
	
	//For testing and displaying, will not be here later. Instead it will be called from the courselist
	this.course = {
            "code": "SF1624",
            "title": "Algebra och geometri",
            "href": "http://www.kth.se/student/kurser/kurs/SF1624",
            "info": "Algebra och geometri är en grundläggande kurs i linjär algebra med vektorgeometri. Ett centralt begrepp i kursen är linjäritet som ligger till grund för stora delar av användningen av matematik inom såväl naturvetenskap som inom ingenjörstillämpningar.",
            "credits": "7,5",
            "level": "Grundnivå"
        }
	
  	return this;

});