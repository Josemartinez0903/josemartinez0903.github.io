//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Vamos lo lograste."; messageTime="Se te acabo el tiempo."; messageError="Suerte para la proxima."; messageErrorG="Suerte para la proxima."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q3J1Y2lncmFtYV9kZV9iaW9sb2dpYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["TA==","QQ==","TQ==","QQ==","Ug==","Qw==","Sw==","","","Vg==","","Rg==","Vw==","","Qw=="],["QQ==","","","","","","","","","QQ==","","TA==","QQ==","","SA=="],["TQ==","VQ==","VA==","QQ==","Qw==","SQ==","Tw==","Tg==","","Ug==","","VQ==","TA==","","QQ=="],["QQ==","","","TA==","","","","","","SQ==","","Sg==","TA==","","Ug=="],["Ug==","","","RQ==","","","","","","QQ==","","Tw==","QQ==","","TA=="],["Qw==","","","TA==","","","","","RQ==","Qg==","","Rw==","Qw==","","RQ=="],["Sw==","","","Tw==","","","","","Vg==","SQ==","","RQ==","RQ==","","Uw=="],["SQ==","","","","","","","","Tw==","TA==","","Tg==","","","RA=="],["Uw==","","","","","","","","TA==","SQ==","","SQ==","","","QQ=="],["TQ==","","","","","","","","VQ==","RA==","","Qw==","","","Ug=="],["Tw==","","Rg==","Tw==","Uw==","SQ==","TA==","","Qw==","QQ==","","Tw==","","","Vw=="],["","","","","","","","","SQ==","RA==","","","","","SQ=="],["","TQ==","QQ==","Qw==","Ug==","Tw==","RQ==","Vg==","Tw==","TA==","VQ==","Qw==","SQ==","Tw==","Tg=="],["","","","","","","","","Tg==","","","","","",""],["TQ==","SQ==","Qw==","Ug==","Tw==","RQ==","Vg==","Tw==","TA==","VQ==","Qw==","SQ==","Tw==","Tg==",""]];
var x1=[1,1,1,15,13,12,12,12,12,12,12,12,12,1,2,3,4,10,9];
var y1=[1,1,3,1,1,1,1,2,3,4,5,6,7,15,13,11,3,1,6];
var x2=[7,1,8,15,13,12,13,13,13,13,13,13,13,14,15,7,4,10,9];
var y2=[1,11,3,13,7,11,1,2,3,4,5,6,7,15,13,11,7,13,15];
var imaCW=["","","","","","","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","","","","","","",""];
var defCW=["fue un naturalista franc??s, ??? uno de los grandes hombres de la ??poca de la sistematizaci??n de la historia natural,    formul?? la primera teor??a de la evoluci??n biol??gica, ??? en 1802","es el t??rmino usado para referirse a la teor??a de la evoluci??n formulada por el naturalista franc??s Jean-Baptiste","es un cambio en la secuencia de ADN de un organismo.","Fue un naturalista britanico que no estaba convecido por la teoria lamarckiana de la evolucion.","fue un naturalista, explorador, ge??grafo, antrop??logo y bi??logo brit??nico, conocido por haber propuesto una teor??a de evoluci??n a trav??s de la selecci??n natural independiente de la de Charles Darwin que motiv?? a este a publicar su propia teor??a.","consiste en la transferencia de genes de una poblacion a otra.","","","","","","","","Se refiere a los cambios o peque??a escala que afectan unicamente a uno o unos cuantos genes y que ocurren en las poblaciones en escalas.","Se refiere a los cambios a gran escala que ocurren a lo largo de extensos periodos de tiempo.","son los restos o se??ales de la actividad de organismos pret??ritos.??? Dichos restos, conservados en las rocas sedimentarias, pueden haber sufrido transformaciones en su composici??n o deformaciones m??s o menos intensas. La ciencia que se ocupa del estudio de los f??siles es la paleontolog??a.","es cada una de las formas alternativas que puede tener un mismo gen y que se puede manifestar en modificaciones concretas de la funci??n de ??ste.??? Dado que la mayor??a de los mam??feros son diploides, poseen dos juegos de cromosomas, uno de ellos procedente del padre y el otro de la madre","es una medida de la tendencia de los genotipos de una poblaci??n a diferenciarse. Los individuos de una misma especie no son id??nticos. Si bien, son reconocibles como pertenecientes a la misma especie, existen muchas diferencias en su forma, funci??n y comportamiento.","en relaci??n con la gen??mica, se refiere al proceso por el cual los organismos vivos cambian con el tiempo a trav??s de cambios en el genoma."];
var altCW=["","","","","","","","","","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
