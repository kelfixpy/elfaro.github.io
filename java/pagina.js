document.addEventListener('DOMContentLoaded', () => {
    // 📚 Base de datos de todos los libros
    const datosLibros = {
        "La Odisea": { autor: "Homero", fecha: "Siglo VIII a.C", sintesis: "Esta épica obra griega narra las peligrosas aventuras del héroe Odiseo (Ulises) en su accidentado viaje de regreso a su reino en Ítaca tras la caída de Troya, mientras su fiel esposa Penélope y su hijo Telémaco lo resisten todo esperándolo." },
        "Don Quijote de la Mancha": { autor: "Miguel de Cervantes", fecha: "1605", sintesis: "Un hidalgo empobrecido enloquece por leer novelas de caballería y decide convertirse en caballero andante, viviendo aventuras cómicas y trágicas junto a su escudero Sancho Panza." },
        "Crimen y Castigo": { autor: "Fiódor Dostoyevski", fecha: "1866", sintesis: "Rodión Raskólnikov, un joven estudiante de derecho sumido en la pobreza en San Petersburgo, formula una teoría donde los hombres extraordinarios tienen derecho a cometer crímenes. Tras asesinar a una usurera, el libro desentraña su implacable tormento mental y su dilema moral." },
        "La Divina Comedia": { autor: "Dante Alighieri", fecha: "1320", sintesis: "Un poema alegórico cumbre de la literatura donde el propio Dante, guiado por el poeta Virgilio, viaja a través de los círculos concéntricos del Infierno, los escalones del Purgatorio y las esferas celestiales del Paraíso para purificar su alma y encontrarse con su amada Beatriz." },
        "Moby Dick": { autor: "Herman Melville", fecha: "1851", sintesis: "A bordo del ballenero Pequod, asistimos a la obsesiva, demencial y autodestructiva cacería iniciada por el enigmático Capitán Ahab contra la gran ballena blanca, Moby Dick, en una alegoría profunda sobre la naturaleza, el destino y la obsesión humana." },
        "El Conde de MonteCristo": { autor: "Alexandre Dumas", fecha: "1845", sintesis: "Edmond Dantès es traicionado por sus amigos y encarcelado injustamente. Tras escapar años después y encontrar un tesoro oculto, regresa bajo una nueva identidad para ejecutar una milimétrica venganza." },
        "Cumbres Borrascosas": { autor: "Emily Bronte", fecha: "1847", sintesis: "Una oscura e intensa historia de amor, obsesión y venganza que destruye a dos generaciones en los desolados páramos ingleses, protagonizada por el apasionado y rencoroso Heathcliff." },
        "1984": { autor: "George Orwell", fecha: "1949", sintesis: "Winston Smith vive en una sociedad totalitaria controlada rígidamente por el Gran Hermano y el Partido, donde el pensamiento disidente está prohibido y la verdad es manipulada diariamente. Una distopía asfixiante sobre el poder absoluto y la pérdida de libertades." },
        "Orgullo y Prejuicio": { autor: "Jane Austen", fecha: "1813", sintesis: "La historia gira en torno a Elizabeth Bennet y Fitzwilliam Darcy, dos personalidades fuertes que deben superar sus propios sesgos y juicios sociales en la Inglaterra rural para descubrir el afecto mutuo, entrelazando ingenio y una sutil crítica social." },
        "El Gran Gatsby": { autor: "F. Scott Fitzgerald", fecha: "1925", sintesis: "Narra la historia de Jay Gatsby, un multimillonario misterioso obsesionado con recuperar al amor de su vida, Daisy Buchanan, en medio de la opulencia, las fiestas de jazz y la superficialidad trágica de los dorados años veinte norteamericanos." },
        "Cien Años de Soledad": { autor: "Gabriel García Márquez", fecha: "1967", sintesis: "La magistral crónica de las siete generaciones de la familia Buendía en el místico e imaginario pueblo de Macondo. Obra cumbre del realismo mágico, donde los milagros, las guerras civiles y las tragedias familiares se entrelazan de forma cotidiana e indestructible." },
        "Fahrenheit 451": { autor: "Ray Bradbury", fecha: "1953", sintesis: "Guy Montag es un bombero en una sociedad futurista donde su trabajo no es apagar incendios, sino provocar la quema absoluta de todos los libros por orden del Estado, hasta que un encuentro casual lo hace cuestionar la censura y el valor real del libre pensamiento." },
        "Un Mundo Feliz": { autor: "Aldous Huxley", fecha: "1932", sintesis: "Una escalofriante distopía futurista donde la humanidad es cultivada de forma artificial en laboratorios, dividida por castas biológicas y adoctrinada psicológicamente para consumir y ser feliz mediante una droga legal llamada Soma, anulando cualquier atisbo de individualidad." },
        "La Metamorfosis": { autor: "Franz Kafka", fecha: "1915", sintesis: "Gregorio Samsa, un abnegado comerciante que mantiene a su familia, despierta una mañana transformado por completo en un monstruoso y gigantesco insecto. El relato describe el aislamiento y el rechazo paulatino que sufre por parte de su propio entorno." },
        "El Retrato de Dorian Gray": { autor: "Oscar Wilde", fecha: "1890", sintesis: "Un joven de belleza excepcional desea fervientemente que su retrato envejezca en su lugar. Su deseo es concedido, permitiéndole sumergirse en una vida de vicios eternos mientras el lienzo oculto se desfigura mostrando las horribles cicatrices morales de sus pecados." },
        "Los Miserables": { autor: "Victor Hugo", fecha: "1862", sintesis: "La monumental historia del exconvicto Jean Valjean en busca de redención en la Francia del siglo XIX. Un retrato crudo de las injusticias sociales, la pobreza, el amor incondicional y las insurrecciones revolucionarias que marcaron una época histórica." },
        "Las Flores del Mar": { autor: "Charles Baudelaire", fecha: "1857", sintesis: "La célebre colección de poemas que revolucionó el simbolismo literario, explorando las contradicciones del espíritu humano entre la belleza idealizada y el hastío urbano, el pecado, la decadencia y la melancolía existencial de la modernidad." },
        "La Ilíada": { autor: "Homero", fecha: "Siglo VIII a.C.", sintesis: "Un poema épico monumental centrado en las últimas semanas de la Guerra de Troya, detallando con fervor la devastadora cólera de Aquiles, sus disputas con el rey Agamenón y los combates legendarios a las puertas de las murallas troyanas." },
        "Macbeth": { autor: "William Shakespeare", fecha: "1606", sintesis: "Inspirado por una profecía de tres brujas y empujado por la ambición de su fría esposa, el general escocés Macbeth asesina a su rey para usurpar el trono, desatando una espiral incontrolable de paranoia, alucinaciones de sangre y culpa psicológica." },
        "El Sabueso de los Baskerville": { autor: "Arthur Conan Doyle", fecha: "1902", sintesis: "El legendario detective Sherlock Holmes y su compañero, el Doctor Watson, viajan a los tétricos páramos de Devonshire para investigar la muerte de Sir Charles Baskerville, la cual parece estar vinculada a una antigua y letal maldición de un sabueso infernal." },
        "El Señor de los Anillos": { autor: "J.R.R. Tolkien", fecha: "1954", sintesis: "La épica y peligrosa misión del hobbit Frodo Bolsón para destruir el Anillo Único en los fuegos del Monte del Destino y derrotar al Señor Oscuro Sauron." },
        "Harry Potter y la Piedra Filosofal": { autor: "J.K. Rowling", fecha: "1997", sintesis: "Un niño huérfano descubre en su undécimo cumpleaños que es un mago y es invitado a estudiar en el Colegio Hogwarts de Magia y Hechicería." },
        "El Hobbit": { autor: "J.R.R. Tolkien", fecha: "1937", sintesis: "Bilbo Bolsón es arrastrado a una inesperada aventura junto a magos y trece enanos para recuperar un tesoro custodiado por el temible dragón Smaug." },
        "Juego de Tronos": { autor: "George R.R. Martin", fecha: "1996", sintesis: "Nobles familias del continente de Poniente compiten despiadadamente por el control del Trono de Hierro mientras un antiguo mal despierta más allá del Muro." },
        "Las Crónicas de Narnia": {  autor: "C.S. Lewis", fecha: "1950", sintesis: "Cuatro hermanos descubren un ropero místico que sirve de portal hacia una tierra mítica congelada en un invierno eterno por la malvada Bruja Blanca." },
        "El Nombre del Viento": { autor: "Patrick Rothfuss", fecha: "2007", sintesis: "Kvothe, un mago, asesino y músico legendario, relata en primera persona la verdadera historia de su juventud y la dolorosa búsqueda de los asesinos de su familia." },
        "El Camino de los Reyes": {autor: "Brandon Sanderson", fecha: "2010", sintesis: "En un mundo devastado por tormentas eternas, estalla una guerra santa por el honor, la traición y el control de antiguas armaduras de poder divino." },
        "Percy Jackson y el Ladrón del Rayo": { autor: "Rick Riordan",  fecha: "2005", sintesis: "Un adolescente con TDAH descubre que es un semidiós, hijo del dios Poseidón, y es acusado falsamente de haber robado el rayo maestro de Zeus." },
        "Elantris": { autor: "Brandon Sanderson", fecha: "2005", sintesis: "La gloriosa e inmortal ciudad de los dioses cae bajo una extraña enfermedad mística, convirtiendo a sus hermosos habitantes en parias de aspecto cadavérico." },
        "El Imperio Final": { autor: "Brandon Sanderson", fecha: "2006", sintesis: "Un grupo de ladrones con habilidades mágicas basadas en la ingesta de metales planea un golpe imposible para derrocar a un Dios inmortal que tiraniza el mundo." },
        "Eragon": { autor: "Christopher Paolini", fecha: "2002", sintesis: "Un joven granjero encuentra una extraña piedra azul en el bosque, que resulta ser el último huevo vivo de dragón, convirtiéndolo en el heredero de una orden extinta." },
        "American Gods": { autor: "Neil Gaiman", fecha: "2001", sintesis: "Un exconvicto se convierte en el guardaespaldas de un enigmático hombre atrapado en una inminente guerra entre los dioses antiguos y las nuevas deidades modernas." },
        "La Emperatriz de los Etéreos": {  autor: "Laura Gallego", fecha: "2007", sintesis: "Binti emprende un peligroso viaje hacia las tierras del hielo eterno para rescatar a su amigo de una extraña gobernante que promete la perfección absoluta." },
        "Alicia en el País de las Maravillas": {  autor: "Lewis Carroll",  fecha: "1865", sintesis: "Una niña cae por la madriguera de un conejo blanco y llega a un reino subterráneo y surrealista gobernado por naipes vivientes y la lógica del absurdo absoluto." },
        "Peter Pan": { autor: "J.M. Barrie", fecha: "1911",  sintesis: "El niño que se niega a crecer convence a Wendy y sus hermanos de volar a la misteriosa Isla del Nunca Jamás para enfrentarse al temible Capitán Garfio." },
        "El Mago de Oz": { autor: "L. Frank Baum", fecha: "1900", sintesis: "Dorothy y su perro son arrastrados por un tornado a un mundo fantástico y deben seguir el camino de baldosas amarillas para pedirle ayuda al Gran Mago." },
        "La Historia Interminable": {  autor: "Michael Ende", fecha: "1979", sintesis: "Un niño lee un libro mágico en un desván sobre el reino de Fantasía y descubre con asombro que él mismo es un personaje clave para evitar su destrucción total." },
        "Coraline": { autor: "Neil Gaiman", fecha: "2002", sintesis: "Una joven atrapada en el aburrimiento descubre una puerta secreta que la lleva a una versión aparentemente perfecta pero siniestra de su propia vida y familia." },
        "Buenos Presagios": { autor: "Terry Pratchett y Neil Gaiman", fecha: "1990", sintesis: "Un ángel quisquilloso y un demonio amante de la buena vida se alían a regañadientes para sabotear el Apocalipsis porque se han encariñado demasiado con la Tierra." },
        "Stardust": { autor: "Neil Gaiman", fecha: "1997", sintesis: "Un joven enamorado cruza el muro fronterizo de su aldea para recuperar una estrella caída del cielo, descubriendo que en el reino mágico la estrella es una hermosa mujer." },
        "La República": { autor: "Platón", fecha: "375 a.C.",  sintesis: "Una de las obras fundacionales del pensamiento occidental. A través de diálogos socráticos, Platón reflexiona sobre la justicia, la naturaleza del alma y el diseño de una sociedad ideal gobernada con sabiduría universal." },
        "Así habló Zaratustra": {  autor: "Friedrich Nietzsche", fecha: "1883", sintesis: "Una obra maestra filosófico-poética donde el profeta Zaratustra desciende de las montañas para proclamar la muerte de los antiguos dogmas, introduciendo los conceptos del Superhombre y la voluntad de poder." },
        "Meditaciones": { autor: "Marco Aurelio", fecha: "180 d.C.", sintesis: "El diario íntimo y privado del emperador romano más poderoso. Un manual imperecedero de filosofía estoica práctica donde se reflexiona sobre la resiliencia ante la adversidad, la muerte y el cumplimiento del deber."  },
        "El mito de Sísifo": {  autor: "Albert Camus",  fecha: "1942",  sintesis: "Un ensayo existencialista crucial que introduce la filosofía del absurdo. Camus compara la vida humana con el castigo eterno de Sísifo, proponiendo que la aceptación consciente del sinsentido es la verdadera liberación." },
        "Crítica de la razón pura": { autor: "Immanuel Kant", fecha: "1781", sintesis: "Un pilar de la filosofía moderna. Kant examina los límites y estructuras de la mente humana, demostrando que no percibimos las cosas como son en sí mismas, sino a través de los filtros de nuestra propia razón." },
        "El contrato social": { autor: "Jean-Jacques Rousseau", fecha: "1762", sintesis: "La obra política que encendió la mecha de la Revolución Francesa. Analiza cómo el hombre entrega parte de su libertad natural a cambio de la protección de las leyes bajo un pacto de soberanía popular legítimo." },
        "Ética a Nicómaco": { autor: "Aristóteles", fecha: "Siglo IV a.C.", sintesis: "El tratado ético más influyente de la antigüedad. Aristóteles postula que el fin último del ser humano es la felicidad, y que esta solo se alcanza mediante la práctica constante del término medio y la virtud guiada por la razón."  },
        "El ser y la nada": { autor: "Jean-Paul Sartre",fecha: "1943",  sintesis: "El texto fundacional del existencialismo ateo. Sartre argumenta que el ser humano no posee una esencia predeterminada, por lo que está completamente condenado a inventarse a sí mismo y a cargar con la angustia de su libertad." },
        "El Príncipe": { autor: "Nicolás Maquiavelo", fecha: "1513", sintesis: "Un análisis crudo, pragmático y realista de la política pura. Maquiavelo instruye a los gobernantes sobre cómo adquirir, mantener y defender el poder estatal prescindiendo de idealismos morales abstractos." },
        "El mundo como voluntad y representación": {  autor: "Arthur Schopenhauer", fecha: "1819", sintesis: "Una obra profundamente pesimista influenciada por el pensamiento oriental. Afirma que detrás de la realidad material se esconde una fuerza ciega, insaciable e irracional llamada Voluntad, que condena al hombre al sufrimiento constante." },
        "Elogio de la locura": { autor: "Erasmo de Rotterdam", fecha: "1511", sintesis: "Un inteligente e incisivo texto satírico donde la propia Locura personificada pronuncia un discurso alabando su presencia en todas las instituciones humanas, desnudando la hipocresía de la iglesia y la nobleza de la época." },
        "Cartas a Lucilio": { autor: "Lucio Anneo Séneca", fecha: "65 d.C.", sintesis: "Una colección de lecciones morales prácticas redactadas al final de la vida del filósofo. Aborda temas cotidianos como el manejo del tiempo, el miedo a la vejez, el valor de la templanza y la búsqueda de paz interior." },
        "Utopía": {  autor: "Tomás Moro", fecha: "1516",  sintesis: "El autor describe una isla con una civilización imaginaria pacífica, justa y comunitaria para lanzar una crítica feroz contra la codicia y los males políticos de la Europa monárquica de su tiempo." },
        "La sociedad del cansancio": {  autor: "Byung-Chul Han", fecha: "2010", sintesis: "Un diagnóstico filosófico contemporáneo imprescindible. Han describe cómo el sujeto moderno ha pasado de vivir bajo una opresión externa a convertirse en un autoexplotador voluntario persiguiendo el rendimiento, lo que desemboca en un crónico agotamiento psíquico." },
        "Crimen y Castigo": { autor: "Fiódor Dostoyevski", fecha: "1866", sintesis: "Rodión Raskólnikov, un joven sumido en la pobreza extrema, planea y ejecuta el asesinato de una vieja usurera basándose en una teoría de superioridad moral, desatando una asfixiante persecución policial y un implacable tormento psicológico interno." },
        "Madame Bovary": { autor: "Gustave Flaubert", fecha: "1856", sintesis: "Emma Bovary, atrapada en un matrimonio aburrido con un médico rural, busca desesperadamente escapar de la monotonía provinciana refugiándose en romances apasionados, lujos desmedidos y fantasías románticas imposibles que la guiarán a la tragedia." },
        "Ana Karenina": { autor: "León Tolstói", fecha: "1877", sintesis: "Un pilar de la literatura rusa. Narra el escandaloso romance entre la aristócrata Ana Karenina y el joven oficial Vronsky, trazando un feroz contraste entre la hipocresía de los salones imperiales y la búsqueda genuina de la felicidad rural." },
        "Papá Goriot": { autor: "Honoré de Balzac", fecha: "1835", sintesis: "Ubicado en una humilde pensión de París, Balzac disecciona la obsesión trágica de un padre anciano que se desprende de toda su fortuna, honor y dignidad para satisfacer los lujos y caprichos de sus dos ingratas e interesadas hijas." },
        "Oliver Twist": { autor: "Charles Dickens", fecha: "1838", sintesis: "Un retrato crudo de la marginalidad industrial inglesa. El pequeño huérfano Oliver huye de un asilo de trabajos forzados para terminar cayendo en los bajos fondos de Londres, atrapado en una banda de niños carteristas liderada por el infame Fagin."},
        "Rojo y Negro": { autor: "Stendhal", fecha: "1830", sintesis: "Julien Sorel, un brillante y astuto joven de clase baja, utiliza su dominio del latín y su poder de seducción para infiltrarse en las altas esferas de la sociedad francesa post-napoleónica, debatiéndose entre la carrera eclesiástica (el negro) o la militar (el rojo)." },
        "Guerra y Paz": { autor: "León Tolstói",  fecha: "1869",  sintesis: "Una de las obras cumbres universales. Entrelaza magistralmente los hilos de los destinos de numerosas familias aristocráticas rusas enfrentadas a las crudas realidades cotidianas y a los campos de batalla sangrientos durante las guerras napoleónicas." },
        "Marianela": { autor: "Benito Pérez Galdós", fecha: "1878", sintesis: "La desgarradora historia de Nela, una joven pobre, huérfana y de físico desfavorecido, que sirve de lazarillo y guía espiritual de Pablo, un adinerado joven ciego que idealiza su belleza interior. Todo cambia drásticamente cuando él recupera la vista."},
        "Grandes Esperanzas": { autor: "Charles Dickens",  fecha: "1861", sintesis: "Narra la evolución de Pip, un modesto aprendiz de herrero cuya vida da un vuelco total al recibir una cuantiosa fortuna anónima. La obra explora la madurez, las apariencias sociales, la culpa y la verdadera naturaleza de la nobleza humana." },
        "Fortunata y Jacinta": { autor: "Benito Pérez Galdós", fecha: "1887", sintesis: "Considerada la cumbre del realismo español. Sigue las vidas cruzadas de dos mujeres de estratos sociales totalmente opuestos en el Madrid del siglo XIX, unidas de forma trágica e ineludible por el amor hacia el mismo hombre inmaduro." },
        "Los hermanos Karamazov": {  autor: "Fiódor Dostoyevski",  fecha: "1880",  sintesis: "La última gran obra de Dostoyevski. El brutal asesinato de un terrateniente despótico desata las sospechas mutuas entre sus tres complejos e idealistas hijos, sirviendo de escenario para un profundo debate sobre la moral universal, el pecado y la redención."  },
        "La Regenta": { autor: "Leopoldo Alas 'Clarín'", fecha: "1884",  sintesis: "Ana Ozores, atrapada en un matrimonio sin pasión con el antiguo regente de la ciudad de Vetusta, se convierte en el epicentro de una feroz y silenciosa batalla de seducción entre un cínico donjuán local y su influyente confesor eclesiástico." },
        "David Copperfield": { autor: "Charles Dickens", fecha: "1850", sintesis: "Con fuertes tintes autobiográficos, Dickens relata la emocionante andadura existencial de David desde los maltratos sufridos en su niñez y el duro trabajo infantil en las fábricas hasta consagrarse como un exitoso y respetado escritor." },
        "Los Pazos de Ulloa": { autor: "Emilia Pardo Bazán", fecha: "1886", sintesis: "Obra cumbre del naturalismo y realismo español. Sigue al idealista e ingenuo padre Julián a su llegada a una remota y decadente propiedad rural en Galicia, donde intentará en vano imponer moral y orden cristiano frente a la barbarie violenta del entorno." },
        "Las flores del mal": {  autor: "Charles Baudelaire",  fecha: "1857", sintesis: "La obra que revolucionó la poesía moderna y dio origen al simbolismo. Baudelaire explora las profundas contradicciones entre el ideal espiritual y el 'spleen' (el hastío existencial), extrayendo una cruda y oscura belleza de la decadencia urbana y los vicios humanos." },
        "Veinte poemas de amor y una canción desesperada": { autor: "Pablo Neruda", fecha: "1924", sintesis: "Uno de los libros de poesía más célebres de la historia hispanoamericana. Con una fuerza juvenil desbordante, Neruda canta al amor apasionado, la distancia física, el recuerdo doloroso del cuerpo amado y el vacío desolador de la ausencia." },
        "Rimas y Leyendas": { autor: "Gustavo Adolfo Bécquer", fecha: "1871", sintesis: "La esencia misma del romanticismo español tardío. A través de versos musicales, breves y delicados, Bécquer indaga en la naturaleza misteriosa de la poesía, los tormentos del amor inalcanzable, el desengaño amoroso y la muerte trágica." },
        "Poeta en Nueva York": {  autor: "Federico García Lorca",  fecha: "1940",  sintesis: "Escrito durante el crac financiero de 1929, Lorca recurre a impactantes imágenes surrealistas para lanzar un grito desgarrador contra la deshumanización industrial, el capitalismo despiadado, el racismo sistémico y la pérdida de la conexión mística con la naturaleza." },
        "Hojas de hierba": { autor: "Walt Whitman", fecha: "1855", sintesis: "Un hito monumental de la poesía estadounidense en verso libre. Whitman celebra con un optimismo desbordante el cuerpo humano, la libertad individual, la naciente democracia de su país, la naturaleza y la comunión indestructible de todas las almas vivientes." },
        "Soledades, galerías y otros poemas": {  autor: "Antonio Machado", fecha: "1907", sintesis: "Una obra fundamental de la Generación del 98. Machado interioriza el paisaje castellano para construir una poesía intimista, centrada en el fluir del tiempo, los sueños como pasadizos de la mente (las galerías), la melancolía del pasado y los misterios de la infancia." },
        "El hacedor": { autor: "Jorge Luis Borges", fecha: "160", sintesis: "Una de las misceláneas más personales del maestro argentino. Reúne poemas líricos y textos breves en prosa que condensan sus obsesiones eternas: el destino de los héroes ciegos, los laberintos concéntricos, el infinito, los espejos engañosos y el misterio del lenguaje." },
        "Orgullo y Prejuicio": { autor: "Jane Austen", fecha: "1813", sintesis: "La ingeniosa Elizabeth Bennet y el altivo y adinerado señor Darcy deben aprender a superar sus propios prejuicios sociales y su orgullo personal en una Inglaterra rural llena de malentendidos, dinámicas familiares caóticas y una innegable atracción mutua." },
        "Cumbres Borrascosas": { autor: "Emily Brontë", fecha: "1847", sintesis: "Una tormentosa y destructiva historia de amor y venganza ambientada en los desolados páramos de Yorkshire. Sigue la relación obsesiva entre el apasionado Heathcliff y la caprichosa Catherine Earnshaw, un vínculo que trasciende las clases sociales y la muerte misma." },
        "Jane Eyre": {  autor: "Charlotte Brontë",  fecha: "1847",  sintesis: "Una novela de superación e intimidad. Jane Eyre, una huérfana de carácter fuerte e independiente, consigue empleo como institutriz en la misteriosa mansión Thornfield Hall, donde se enamora profundamente de su huraño dueño, el señor Rochester, quien oculta un terrible secreto." },
        "Romeo y Julieta": {  autor: "William Shakespeare",  fecha: "1597",  sintesis: "La obra trágica más famosa de la literatura occidental. En la ciudad de Verona, dos adolescentes pertenecientes a familias rivales a muerte, los Montesco y los Capuleto, se enamoran perdidamente, desafiando el odio de su entorno con un desenlace fatal pero inmortal." },
        "El gran Gatsby": { autor: "F. Scott Fitzgerald", fecha: "1925", sintesis: "En el opulento y desenfrenado verano neoyorquino de los años veinte, el enigmático millonario Jay Gatsby organiza fiestas colosales con el único y obsesivo propósito de reconquistar a su antiguo amor, Daisy Buchanan, ahora casada con un aristócrata." },
        "Sentido y Sensibilidad": { autor: "Jane Austen", fecha: "1811", sintesis: "Narra las vivencias amorosas y financieras de las hermanas Elinor y Marianne Dashwood. Mientras Elinor representa la prudencia, el control y el sentido común, Marianne desborda romanticismo, pasión y sensibilidad pura ante los vaivenes del corazón." },
        "Carta de una desconocida": { autor: "Stefan Zweig", fecha: "1922", sintesis: "Un famoso escritor recibe el día de su cumpleaños una extensa carta de una mujer moribunda. En ella, desvela una confesión íntima y sobrecogedora: haberlo amado con una devoción absoluta, silenciosa y obsesiva desde que era una niña, sin que él jamás se diera cuenta." },
        "Persuasión": { autor: "Jane Austen", fecha: "1817", sintesis: "La última obra completada de Austen. Anne Elliot, una mujer madura que años atrás fue persuadida por su familia para romper su compromiso con un humilde oficial de marina, tiene una segunda oportunidad cuando él regresa convertido en un adinerado y respetado capitán." },
        "Las cuitas del joven Werther": {  autor: "Johann Wolfgang von Goethe",  fecha: "1774",  sintesis: "Una obra cumbre del movimiento 'Sturm und Drang'. A través de apasionadas cartas, el joven artista Werther narra su amor incontrolable por Lotte, una mujer que ya está comprometida con otro hombre, arrastrándolo a un pozo de desesperación existencial."  },
        "La dama de las camelias": {  autor: "Alexandre Dumas (hijo)",  fecha: "1848",  sintesis: "Inspirada en hechos reales, narra los amores trágicos entre Armando Duval, un joven de buena posición social, y Margarita Gautier, la cortesana más codiciada y hermosa de París, cuyo amor puro se ve truncado por los prejuicios sociales y una implacable enfermedad."  },
        "Los pilares de la Tierra": { autor: "Ken Follett", fecha: "1989", sintesis: "Una obra monumental ambientada en la Inglaterra del siglo XII. Gira en torno a la construcción de una grandiosa catedral gótica en el pueblo ficticio de Kingsbridge, entrelazando las vidas de constructores, monjes y nobles atrapados en una devastadora guerra civil por el trono."  },
        "Sinuhé, el egipcio": { autor: "Mika Waltari", fecha: "1945",sintesis: "A través de las memorias de Sinuhé, el médico real del faraón Akhenatón, se despliega una recreación del antiguo Egipto. La novela explora la caída de los viejos dioses, el alzamiento del monoteísmo solar y los viajes de exploración del protagonista por los reinos de Babilonia y Creta." },
        "Yo, Claudio": { autor: "Robert Graves", fecha: "1934", sintesis: "Escrita a modo de una falsa autobiografía secreta del emperador Claudio. Sorteando su supuesta debilidad física y tartamudez, Claudio sobrevive milagrosamente a las sangrientas purgas y complejas intrigas palaciegas de sus parientes dinásticos: Augusto, Tiberio y el demente Calígula."},
        "El nombre de la rosa": { autor: "Umberto Eco",  fecha: "1980",  sintesis: "Un brillante cruce entre novela histórica y misterio detectivesco. En el año 1327, el agudo fraile franciscano Guillermo de Baskerville y su joven discípulo Adso llegan a una rica abadía benedictina en los Alpes para resolver una serie de grotescos e inexplicables asesinatos vinculados a un libro prohibido." },
        "Memorias de Adriano": { autor: "Marguerite Yourcenar",  fecha: "1951",  sintesis: "Una larga y poética epístola redactada por el emperador Adriano en las postrimerías de su vida y dirigida a su sucesor, Marco Aurelio. Yourcenar reconstruye la psicología de uno de los gobernantes más lúcidos de Roma, reflexionando sobre el arte, la paz imperial, el amor y la vejez."  },
        "El médico": { autor: "Noah Gordon", fecha: "1986", sintesis: "Narra la odisea de Rob Cole, un huérfano londinense del siglo XI con el don místico de predecir la muerte con sus manos. Decidido a dominar el arte de la sanación, cruza una Europa sumida en la ignorancia para estudiar en la avanzada Persia bajo la tutela del legendario polímata Avicena." },
        "La canción de Troya": { autor: "Colleen McCullough", fecha: "1998", sintesis: "Una visión coral y humanizada de la mítica guerra cantada por Homero. A través de capítulos narrados en primera persona por protagonistas clave como Aquiles, Héctor, Helena, Agamenón y Odiseo, la autora despoja el conflicto de mitos divinos enfocándose en las pasiones y ambiciones humanas." },
        "Shogún": { autor: "James Clavell", fecha: "1975", sintesis: "Ambientada en el Japón del año 1600. Sigue al navegante inglés John Blackthorne, quien tras encallar en las costas niponas debe aprender a sobrevivir en una cultura feudal sofisticada y violenta dominada por los samuráis, convirtiéndose en el hombre de confianza del poderoso señor Toranaga." },
        "Diez negritos": { autor: "Agatha Christie", fecha: "1939", sintesis: "La novela de misterio más vendida de todos los tiempos. Diez personas que ocultan pasados oscuros son invitadas por un misterioso anfitrión a una mansión en una isla desierta. Uno a uno empiezan a ser asesinados siguiendo la macabra rima de una canción infantil, sembrando la paranoia total."  },
        "El código Da Vinci": { autor: "Dan Brown",  fecha: "2003",  sintesis: "Un trepidante thriller conspirativo. El experto en simbología Robert Langdon debe huir por las calles de París y Londres investigando el asesinato del conservador del Louvre, descubriendo una red de pistas ocultas en las pinturas de Leonardo da Vinci que amenazan con desestabilizar a la Iglesia." },
        "El espía que surgió del frío": {  autor: "John le Carré",  fecha: "13",  sintesis: "Una obra maestra del suspenso de espionaje. El agente británico Alec Leamas acepta una última misión suicida: fingir su decadencia y deserción para infiltrarse tras el Muro de Berlín y derribar al jefe del contraespionaje de Alemania Oriental en un laberinto de secretos cínicos." },
        "Perdida": { autor: "Gillian Flynn", fecha: "2012",  sintesis: "Un thriller psicológico brillante e impredecible. Amy Dunne desaparece misteriosamente el día de su quinto aniversario de bodas. La presión de la prensa, las extrañas pistas dejadas en una búsqueda del tesoro y las mentiras de su esposo Nick lo convierten ante el mundo en el sospechoso principal de un supuesto crimen perfecto." },
        "La verdad sobre el caso Harry Quebert": { autor: "Joël Dicker", fecha: "2012", sintesis: "Una adictiva estructura de cajas rusas. El joven escritor Marcus Goldman viaja a un tranquilo pueblo de Maine para resolver el bloqueo creativo con su mentor, el legendario autor Harry Quebert. Todo estalla cuando descubren en el jardín de Quebert el cadáver de una joven desaparecida en 175." }
    };

    const modal = document.getElementById('modalLibro');
    const btnCerrar = document.getElementById('btnCerrarModal');
    const contadorVisual = document.getElementById('contador-carrito-global');

    // memoria del carritooo
    let cantidadCarrito = parseInt(localStorage.getItem('carritoContador')) || 0;
    if (contadorVisual) contadorVisual.textContent = cantidadCarrito;

    // Abrir la modal 
    document.querySelector('.seccion-catalogo').addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-vermas')) {
            const tarjeta = e.target.closest('.tarjeta-producto');
            const titulo = tarjeta.querySelector('.producto-info h3').textContent;
            const precio = tarjeta.querySelector('.producto-precio').textContent;
            const categoria = tarjeta.querySelector('.producto-categoria').textContent;
            const imagenSrc = tarjeta.querySelector('.producto-imagen img').src;
            const detalles = datosLibros[titulo] || { autor: "Anónimo", fecha: "Antigua", sintesis: "" };

            document.getElementById('modalTitulo').textContent = titulo;
            document.getElementById('modalPrecio').textContent = precio;
            document.getElementById('modalCategoria').textContent = categoria;
            document.getElementById('modalImagen').src = imagenSrc;
            document.getElementById('modalAutorText').textContent = detalles.autor;
            document.getElementById('modalFechaText').textContent = detalles.fecha;
            document.getElementById('modalSintesis').textContent = detalles.sintesis;

            modal.style.display = 'flex';
        }
    });

    // presionarel carrito dentro de la modal
    modal.querySelector('.btn-agregar-carrito').addEventListener('click', () => {
        cantidadCarrito++;
        if (contadorVisual) contadorVisual.textContent = cantidadCarrito;
        
        localStorage.setItem('carritoContador', cantidadCarrito);

        const btn = modal.querySelector('.btn-agregar-carrito');
        btn.textContent = "✓ ¡Añadido!";
        setTimeout(() => {
            btn.innerHTML = "<span>🛒</span> Añadir al Carrito";
        }, 1200);
    });
    // Cerrar la modal
    btnCerrar.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});

// CONTADOOOR CARRITOOO
document.addEventListener('DOMContentLoaded', () => {
    let cantidadProductos = parseInt(localStorage.getItem('carritoContador')) || 0;
    
    const contador = document.getElementById('contadorCarrito');
    
    if (contador) {
        contador.textContent = cantidadProductos;
    }
    document.addEventListener('click', (e) => {
        if (e.target && e.target.tagName === 'BUTTON' && e.target.innerText.includes('Añadir al Carrito')) {
            cantidadProductos++; 
            localStorage.setItem('carritoContador', cantidadProductos);
            
            if (contador) {
                contador.textContent = cantidadProductos;
            }
        }
    });
});
// NOTICIIIIAAAAAAS
const baseDatosNoticias = {
    noticia2: {
        titulo: "Inauguración del Rincón del Investigador",
        fecha: "28 de Junio, 2026",
        cuerpo: "La arquitectura de nuestro local se expande para el beneficio de las mentes curiosas. Hemos acondicionado una antigua ala de piedra y vigas de roble expuestas, bautizándola como 'El Rincón del Investigador'. Equipado con lámparas de luz tenue, tinteros decorativos y cómodos sillones rústicos, este espacio está reservado estrictamente para aquellos navegantes que requieran sumergirse en lecturas silenciosas, apuntes analíticos u horas de estudio concentrado sin las prisas del mundo moderno."
    },
    noticia3: {
        titulo: "Velada lírica bajo la luz de las velas",
        fecha: "15 de Junio, 2026",
        cuerpo: "La poesía tomó vida entre los muros de El Faro. En un encuentro mágico y a puertas cerradas, nuestro Gran Salón de Lectura cobró un aura ancestral iluminado únicamente por la luz titilante de las velas. Decenas de lectores apasionados compartieron la lectura de poemarios fundamentales, analizando las lúgubres bellezas de Baudelaire y los impactantes versos surrealistas de Federico García Lorca. Debido al rotundo éxito de asistencia, el gremio planea institucionalizar estas veladas poéticas a mediados de cada mes."
    },
    noticia4: {
        titulo: "Nuevos sellos y empaques de alta protección",
        fecha: "02 de Junio, 2026",
        cuerpo: "Porque sabemos que el trayecto de un libro es sagrado, el maestre de logística Mateo Cubas ha implementado un nuevo protocolo de empaque rústico de alta durabilidad. A partir de la fecha, todo volumen despachado con destino al interior de la república será envuelto de manera hermética en capas protectoras contra la humedad y el polvo, introducido en cajas rígidas y sellado a mano con lacre real. Aseguramos así que ni las tormentas más recias alteren la pulcritud de tus páginas seleccionadas."
    },
    noticia5: {
        titulo: "Semana dedicada al Realismo Ruso",
        fecha: "20 de Mayo, 2026",
        cuerpo: "Iniciamos nuestras jornadas de inmersión cultural dedicadas a diseccionar las obras de los grandes pensadores de las estepas rusas. Durante toda una semana, El Faro albergará tertulias vespertinas analizando el remordimiento psicológico en 'Crimen y Castigo' de Dostoyevski y el monumental lienzo social de 'Guerra y Paz' de Tolstói. Los tomos seleccionados para estas dinámicas contarán con consideraciones especiales en sus valores comerciales."
    },
    noticia6: {
        titulo: "Restauración de un incunable de Bécquer",
        fecha: "10 de Mayo, 2026",
        cuerpo: "Una victoria para el patrimonio literario de nuestra comunidad. Nuestro especialista Daniel Duarte ha culminado con rotundo éxito una meticulosa labor de restauración manual sobre una rarísima edición de las 'Rimas y Leyendas' de Gustavo Adolfo Bécquer editada en 1871. El ejemplar, cuyas hojas padecían los rigores del tiempo, ha sido consolidado empleando técnicas tradicionales no invasivas y estará expuesto de forma segura en nuestra vitrina central para el deleite visual de los visitantes."
    },
    noticia7: {
        titulo: "Buscadores de Historias: El Club del Faro",
        fecha: "25 de Abril, 2026",
        cuerpo: "Convocamos formalmente a todos los navegantes a unirse a las filas de nuestro círculo oficial de lectura: 'Buscadores de Historias'. El objetivo de este gremio es reunirnos de forma mensual en nuestros salones físicos para poner en común impresiones, debatir aristas históricas y compartir análisis profundos sobre las obras adquiridas. En nuestro próximo encuentro, desvelaremos los misterios de la novela histórica medieval europea. Las inscripciones son libres."
    },
    noticia8: {
        titulo: "Encuentro filosófico sobre el Estoicismo",
        fecha: "12 de Abril, 2026",
        cuerpo: "En un entorno social acelerado, los viejos escritos de los emperadores y sabios siguen ofreciendo la mejor brújula moral. Llevamos a cabo un conversatorio enfocado en las 'Meditaciones' de Marco Aurelio y los tratados de Séneca, compartiendo herramientas para construir una fortaleza mental ante el caos cotidiano. Agradecemos la masiva concurrencia de jóvenes estudiantes y mentes analíticas de todo el sector."
    },
    noticia9: {
        titulo: "Ciclo de Misterio y Suspenso Clásico",
        fecha: "03 de Abril, 2026",
        cuerpo: "Las intrigas y los enigmas deductivos se apoderan de las estanterías de El Faro. Damos inicio a nuestro ciclo otoñal de suspenso, destacando las ingeniosas mecánicas de Agatha Christie y las densas atmósferas de espionaje clásicas. Invitamos a la comunidad a explorar estos laberintos narrativos donde cada página es una pista y nada es lo que parece inicialmente."
    },
    noticia10: {
        titulo: "Donación de tomos a bibliotecas del interior",
        fecha: "18 de Marzo, 2026",
        cuerpo: "Extendiendo el alcance de la cultura. Gracias al generoso remanente de fondos y donaciones directas efectuadas por los allegados a nuestra librería, logramos consolidar y enviar tres robustos cajones de madera repletos de novelas, manuales educativos y antologías poéticas con destino a centros culturales y escuelas rurales de escasos recursos. Creemos firmemente que la luz del Faro debe brillar incluso en los rincones más lejanos."
    }
};

// modaaalde las noticiaaas
const modal = document.getElementById("modal-noticia");
const btnCerrar = document.querySelector(".btn-cerrar-modal");
const modalFecha = document.getElementById("modal-fecha");
const modalTitulo = document.getElementById("modal-titulo");
const modalCuerpo = document.getElementById("modal-cuerpo");
const tarjetas = document.querySelectorAll(".tarjeta-cronica");

tarjetas.forEach(tarjeta => {
    const boton = tarjeta.querySelector(".btn-ver-mas-medieval");
    boton.addEventListener("click", () => {
        const id = tarjeta.getAttribute("data-id");
        const contenidoInterno = baseDatosNoticias[id];

        if (contenidoInterno) {
            modalFecha.textContent = contenidoInterno.fecha;
            modalTitulo.textContent = contenidoInterno.titulo;
            modalCuerpo.innerHTML = `<p>${contenidoInterno.cuerpo}</p>`;
            modal.style.display = "flex";
        }
    });
});

btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});