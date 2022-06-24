const dogBreeds = [{"id": 0, "name": "Affenpinscher"}, {"id": 1, "name": "Afghan Hound"}, {
  "id": 2,
  "name": "Airedale Terrier"
}, {"id": 3, "name": "Akbash"}, {"id": 4, "name": "Akita"}, {"id": 5, "name": "Alaskan Malamute"}, {
  "id": 6,
  "name": "American Bulldog"
}, {"id": 7, "name": "American Bully"}, {"id": 8, "name": "American Eskimo Dog"}, {
  "id": 9,
  "name": "American Foxhound"
}, {"id": 10, "name": "American Hairless Terrier"}, {"id": 11, "name": "American Staffordshire Terrier"}, {
  "id": 12,
  "name": "American Water Spaniel"
}, {"id": 13, "name": "Anatolian Shepherd"}, {"id": 14, "name": "Appenzell Mountain Dog"}, {
  "id": 15,
  "name": "Aussiedoodle"
}, {"id": 16, "name": "Australian Cattle Dog / Blue Heeler"}, {"id": 17, "name": "Australian Kelpie"}, {
  "id": 18,
  "name": "Australian Shepherd"
}, {"id": 19, "name": "Australian Terrier"}, {"id": 20, "name": "Basenji"}, {
  "id": 21,
  "name": "Basset Hound"
}, {"id": 22, "name": "Beagle"}, {"id": 23, "name": "Bearded Collie"}, {"id": 24, "name": "Beauceron"}, {
  "id": 25,
  "name": "Bedlington Terrier"
}, {"id": 26, "name": "Belgian Shepherd / Laekenois"}, {"id": 27, "name": "Belgian Shepherd / Malinois"}, {
  "id": 28,
  "name": "Belgian Shepherd / Sheepdog"
}, {"id": 29, "name": "Belgian Shepherd / Tervuren"}, {"id": 30, "name": "Bernedoodle"}, {
  "id": 31,
  "name": "Bernese Mountain Dog"
}, {"id": 32, "name": "Bichon Frise"}, {"id": 33, "name": "Black and Tan Coonhound"}, {
  "id": 34,
  "name": "Black Labrador Retriever"
}, {"id": 35, "name": "Black Mouth Cur"}, {"id": 36, "name": "Black Russian Terrier"}, {
  "id": 37,
  "name": "Bloodhound"
}, {"id": 38, "name": "Blue Lacy"}, {"id": 39, "name": "Bluetick Coonhound"}, {"id": 40, "name": "Boerboel"}, {
  "id": 41,
  "name": "Bolognese"
}, {"id": 42, "name": "Border Collie"}, {"id": 43, "name": "Border Terrier"}, {"id": 44, "name": "Borzoi"}, {
  "id": 45,
  "name": "Boston Terrier"
}, {"id": 46, "name": "Bouvier des Flandres"}, {"id": 47, "name": "Boxer"}, {
  "id": 48,
  "name": "Boykin Spaniel"
}, {"id": 49, "name": "Briard"}, {"id": 50, "name": "Brittany Spaniel"}, {
  "id": 51,
  "name": "Brussels Griffon"
}, {"id": 52, "name": "Bull Terrier"}, {"id": 53, "name": "Bullmastiff"}, {
  "id": 54,
  "name": "Cairn Terrier"
}, {"id": 55, "name": "Canaan Dog"}, {"id": 56, "name": "Cane Corso"}, {
  "id": 57,
  "name": "Cardigan Welsh Corgi"
}, {"id": 58, "name": "Carolina Dog"}, {"id": 59, "name": "Catahoula Leopard Dog"}, {
  "id": 60,
  "name": "Cattle Dog"
}, {"id": 61, "name": "Caucasian Sheepdog / Caucasian Ovtcharka"}, {"id": 62, "name": "Cavachon"}, {
  "id": 63,
  "name": "Cavalier King Charles Spaniel"
}, {"id": 64, "name": "Cavapoo"}, {"id": 65, "name": "Chesapeake Bay Retriever"}, {
  "id": 66,
  "name": "Chihuahua"
}, {"id": 67, "name": "Chinese Crested Dog"}, {"id": 68, "name": "Chinese Foo Dog"}, {
  "id": 69,
  "name": "Chinook"
}, {"id": 70, "name": "Chiweenie"}, {"id": 71, "name": "Chocolate Labrador Retriever"}, {
  "id": 72,
  "name": "Chow Chow"
}, {"id": 73, "name": "Cirneco dell'Etna"}, {"id": 74, "name": "Clumber Spaniel"}, {
  "id": 75,
  "name": "Cockapoo"
}, {"id": 76, "name": "Cocker Spaniel"}, {"id": 77, "name": "Collie"}, {"id": 78, "name": "Coonhound"}, {
  "id": 79,
  "name": "Corgi"
}, {"id": 80, "name": "Coton de Tulear"}, {"id": 81, "name": "Curly-Coated Retriever"}, {
  "id": 82,
  "name": "Dachshund"
}, {"id": 83, "name": "Dalmatian"}, {"id": 84, "name": "Dandie Dinmont Terrier"}, {
  "id": 85,
  "name": "Doberman Pinscher"
}, {"id": 86, "name": "Dogo Argentino"}, {"id": 87, "name": "Dogue de Bordeaux"}, {
  "id": 88,
  "name": "Dutch Shepherd"
}, {"id": 89, "name": "English Bulldog"}, {"id": 90, "name": "English Cocker Spaniel"}, {
  "id": 91,
  "name": "English Coonhound"
}, {"id": 92, "name": "English Foxhound"}, {"id": 93, "name": "English Pointer"}, {
  "id": 94,
  "name": "English Setter"
}, {"id": 95, "name": "English Shepherd"}, {"id": 96, "name": "English Springer Spaniel"}, {
  "id": 97,
  "name": "English Toy Spaniel"
}, {"id": 98, "name": "Entlebucher"}, {"id": 99, "name": "Eskimo Dog"}, {"id": 100, "name": "Feist"}, {
  "id": 101,
  "name": "Field Spaniel"
}, {"id": 102, "name": "Fila Brasileiro"}, {"id": 103, "name": "Finnish Lapphund"}, {
  "id": 104,
  "name": "Finnish Spitz"
}, {"id": 105, "name": "Flat-Coated Retriever"}, {"id": 106, "name": "Fox Terrier"}, {
  "id": 107,
  "name": "Foxhound"
}, {"id": 108, "name": "French Bulldog"}, {"id": 109, "name": "Galgo Spanish Greyhound"}, {
  "id": 110,
  "name": "German Pinscher"
}, {"id": 111, "name": "German Shepherd Dog"}, {"id": 112, "name": "German Shorthaired Pointer"}, {
  "id": 113,
  "name": "German Spitz"
}, {"id": 114, "name": "German Wirehaired Pointer"}, {"id": 115, "name": "Giant Schnauzer"}, {
  "id": 116,
  "name": "Glen of Imaal Terrier"
}, {"id": 117, "name": "Golden Retriever"}, {"id": 118, "name": "Goldendoodle"}, {
  "id": 119,
  "name": "Gordon Setter"
}, {"id": 120, "name": "Great Dane"}, {"id": 121, "name": "Great Pyrenees"}, {
  "id": 122,
  "name": "Greater Swiss Mountain Dog"
}, {"id": 123, "name": "Greyhound"}, {"id": 124, "name": "Hamiltonstovare"}, {"id": 125, "name": "Harrier"}, {
  "id": 126,
  "name": "Havanese"
}, {"id": 127, "name": "Hound"}, {"id": 128, "name": "Hovawart"}, {"id": 129, "name": "Husky"}, {
  "id": 130,
  "name": "Ibizan Hound"
}, {"id": 131, "name": "Icelandic Sheepdog"}, {"id": 132, "name": "Illyrian Sheepdog"}, {
  "id": 133,
  "name": "Irish Setter"
}, {"id": 134, "name": "Irish Terrier"}, {"id": 135, "name": "Irish Water Spaniel"}, {
  "id": 136,
  "name": "Irish Wolfhound"
}, {"id": 137, "name": "Italian Greyhound"}, {"id": 138, "name": "Jack Russell Terrier"}, {
  "id": 139,
  "name": "Japanese Chin"
}, {"id": 140, "name": "Jindo"}, {"id": 141, "name": "Kai Dog"}, {"id": 142, "name": "Karelian Bear Dog"}, {
  "id": 143,
  "name": "Keeshond"
}, {"id": 144, "name": "Kerry Blue Terrier"}, {"id": 145, "name": "Kishu"}, {"id": 146, "name": "Klee Kai"}, {
  "id": 147,
  "name": "Komondor"
}, {"id": 148, "name": "Kuvasz"}, {"id": 149, "name": "Kyi Leo"}, {"id": 150, "name": "Labradoodle"}, {
  "id": 151,
  "name": "Labrador Retriever"
}, {"id": 152, "name": "Lakeland Terrier"}, {"id": 153, "name": "Lancashire Heeler"}, {
  "id": 154,
  "name": "Leonberger"
}, {"id": 155, "name": "Lhasa Apso"}, {"id": 156, "name": "Lowchen"}, {"id": 157, "name": "Lurcher"}, {
  "id": 158,
  "name": "Maltese"
}, {"id": 159, "name": "Maltipoo"}, {"id": 160, "name": "Manchester Terrier"}, {
  "id": 161,
  "name": "Maremma Sheepdog"
}, {"id": 162, "name": "Mastiff"}, {"id": 163, "name": "McNab"}, {
  "id": 164,
  "name": "Miniature Bull Terrier"
}, {"id": 165, "name": "Miniature Dachshund"}, {"id": 166, "name": "Miniature Pinscher"}, {
  "id": 167,
  "name": "Miniature Poodle"
}, {"id": 168, "name": "Miniature Schnauzer"}, {"id": 169, "name": "Mixed Breed"}, {
  "id": 170,
  "name": "Morkie"
}, {"id": 171, "name": "Mountain Cur"}, {"id": 172, "name": "Mountain Dog"}, {
  "id": 173,
  "name": "Munsterlander"
}, {"id": 174, "name": "Neapolitan Mastiff"}, {"id": 175, "name": "New Guinea Singing Dog"}, {
  "id": 176,
  "name": "Newfoundland Dog"
}, {"id": 177, "name": "Norfolk Terrier"}, {"id": 178, "name": "Norwegian Buhund"}, {
  "id": 179,
  "name": "Norwegian Elkhound"
}, {"id": 180, "name": "Norwegian Lundehund"}, {"id": 181, "name": "Norwich Terrier"}, {
  "id": 182,
  "name": "Nova Scotia Duck Tolling Retriever"
}, {"id": 183, "name": "Old English Sheepdog"}, {"id": 184, "name": "Otterhound"}, {
  "id": 185,
  "name": "Papillon"
}, {"id": 186, "name": "Parson Russell Terrier"}, {"id": 187, "name": "Patterdale Terrier / Fell Terrier"}, {
  "id": 188,
  "name": "Pekingese"
}, {"id": 189, "name": "Pembroke Welsh Corgi"}, {"id": 190, "name": "Peruvian Inca Orchid"}, {
  "id": 191,
  "name": "Petit Basset Griffon Vendeen"
}, {"id": 192, "name": "Pharaoh Hound"}, {"id": 193, "name": "Pit Bull Terrier"}, {
  "id": 194,
  "name": "Plott Hound"
}, {"id": 195, "name": "Pointer"}, {"id": 196, "name": "Polish Lowland Sheepdog"}, {
  "id": 197,
  "name": "Pomeranian"
}, {"id": 198, "name": "Pomsky"}, {"id": 199, "name": "Poodle"}, {"id": 200, "name": "Portuguese Podengo"}, {
  "id": 201,
  "name": "Portuguese Water Dog"
}, {"id": 202, "name": "Presa Canario"}, {"id": 203, "name": "Pug"}, {"id": 204, "name": "Puggle"}, {
  "id": 205,
  "name": "Puli"
}, {"id": 206, "name": "Pumi"}, {"id": 207, "name": "Pyrenean Shepherd"}, {
  "id": 208,
  "name": "Rat Terrier"
}, {"id": 209, "name": "Redbone Coonhound"}, {"id": 210, "name": "Retriever"}, {
  "id": 211,
  "name": "Rhodesian Ridgeback"
}, {"id": 212, "name": "Rottweiler"}, {"id": 213, "name": "Rough Collie"}, {
  "id": 214,
  "name": "Saint Bernard"
}, {"id": 215, "name": "Saluki"}, {"id": 216, "name": "Samoyed"}, {"id": 217, "name": "Sarplaninac"}, {
  "id": 218,
  "name": "Schipperke"
}, {"id": 219, "name": "Schnauzer"}, {"id": 220, "name": "Schnoodle"}, {
  "id": 221,
  "name": "Scottish Deerhound"
}, {"id": 222, "name": "Scottish Terrier"}, {"id": 223, "name": "Sealyham Terrier"}, {
  "id": 224,
  "name": "Setter"
}, {"id": 225, "name": "Shar-Pei"}, {"id": 226, "name": "Sheep Dog"}, {"id": 227, "name": "Sheepadoodle"}, {
  "id": 228,
  "name": "Shepherd"
}, {"id": 229, "name": "Shetland Sheepdog / Sheltie"}, {"id": 230, "name": "Shiba Inu"}, {
  "id": 231,
  "name": "Shih poo"
}, {"id": 232, "name": "Shih Tzu"}, {"id": 233, "name": "Shollie"}, {"id": 234, "name": "Siberian Husky"}, {
  "id": 235,
  "name": "Silky Terrier"
}, {"id": 236, "name": "Skye Terrier"}, {"id": 237, "name": "Sloughi"}, {
  "id": 238,
  "name": "Smooth Collie"
}, {"id": 239, "name": "Smooth Fox Terrier"}, {"id": 240, "name": "South Russian Ovtcharka"}, {
  "id": 241,
  "name": "Spaniel"
}, {"id": 242, "name": "Spanish Water Dog"}, {"id": 243, "name": "Spinone Italiano"}, {
  "id": 244,
  "name": "Spitz"
}, {"id": 245, "name": "Staffordshire Bull Terrier"}, {"id": 246, "name": "Standard Poodle"}, {
  "id": 247,
  "name": "Standard Schnauzer"
}, {"id": 248, "name": "Sussex Spaniel"}, {"id": 249, "name": "Swedish Vallhund"}, {
  "id": 250,
  "name": "Tennessee Treeing Brindle"
}, {"id": 251, "name": "Terrier"}, {"id": 252, "name": "Thai Ridgeback"}, {
  "id": 253,
  "name": "Tibetan Mastiff"
}, {"id": 254, "name": "Tibetan Spaniel"}, {"id": 255, "name": "Tibetan Terrier"}, {
  "id": 256,
  "name": "Tosa Inu"
}, {"id": 257, "name": "Toy Fox Terrier"}, {"id": 258, "name": "Toy Manchester Terrier"}, {
  "id": 259,
  "name": "Treeing Walker Coonhound"
}, {"id": 260, "name": "Vizsla"}, {"id": 261, "name": "Weimaraner"}, {
  "id": 262,
  "name": "Welsh Springer Spaniel"
}, {"id": 263, "name": "Welsh Terrier"}, {"id": 264, "name": "West Highland White Terrier / Westie"}, {
  "id": 265,
  "name": "Wheaten Terrier"
}, {"id": 266, "name": "Whippet"}, {"id": 267, "name": "White German Shepherd"}, {
  "id": 268,
  "name": "Wire Fox Terrier"
}, {"id": 269, "name": "Wirehaired Dachshund"}, {"id": 270, "name": "Wirehaired Pointing Griffon"}, {
  "id": 271,
  "name": "Wirehaired Terrier"
}, {"id": 272, "name": "Xoloitzcuintli / Mexican Hairless"}, {
  "id": 273,
  "name": "Yellow Labrador Retriever"
}, {"id": 274, "name": "Yorkshire Terrier"}]

const catBreeds = [{"id": 0, "name": "Abyssinian"}, {"id": 1, "name": "American Bobtail"}, {
  "id": 2,
  "name": "American Curl"
}, {"id": 3, "name": "American Shorthair"}, {"id": 4, "name": "American Wirehair"}, {
  "id": 5,
  "name": "Applehead Siamese"
}, {"id": 6, "name": "Balinese"}, {"id": 7, "name": "Bengal"}, {"id": 8, "name": "Birman"}, {
  "id": 9,
  "name": "Bombay"
}, {"id": 10, "name": "British Shorthair"}, {"id": 11, "name": "Burmese"}, {"id": 12, "name": "Burmilla"}, {
  "id": 13,
  "name": "Calico"
}, {"id": 14, "name": "Canadian Hairless"}, {"id": 15, "name": "Chartreux"}, {"id": 16, "name": "Chausie"}, {
  "id": 17,
  "name": "Chinchilla"
}, {"id": 18, "name": "Cornish Rex"}, {"id": 19, "name": "Cymric"}, {"id": 20, "name": "Devon Rex"}, {
  "id": 21,
  "name": "Dilute Calico"
}, {"id": 22, "name": "Dilute Tortoiseshell"}, {"id": 23, "name": "Domestic Long Hair"}, {
  "id": 24,
  "name": "Domestic Medium Hair"
}, {"id": 25, "name": "Domestic Short Hair"}, {"id": 26, "name": "Egyptian Mau"}, {
  "id": 27,
  "name": "Exotic Shorthair"
}, {"id": 28, "name": "Extra-Toes Cat / Hemingway Polydactyl"}, {"id": 29, "name": "Havana"}, {
  "id": 30,
  "name": "Himalayan"
}, {"id": 31, "name": "Japanese Bobtail"}, {"id": 32, "name": "Javanese"}, {"id": 33, "name": "Korat"}, {
  "id": 34,
  "name": "LaPerm"
}, {"id": 35, "name": "Maine Coon"}, {"id": 36, "name": "Manx"}, {"id": 37, "name": "Munchkin"}, {
  "id": 38,
  "name": "Nebelung"
}, {"id": 39, "name": "Norwegian Forest Cat"}, {"id": 40, "name": "Ocicat"}, {
  "id": 41,
  "name": "Oriental Long Hair"
}, {"id": 42, "name": "Oriental Short Hair"}, {"id": 43, "name": "Oriental Tabby"}, {
  "id": 44,
  "name": "Persian"
}, {"id": 45, "name": "Pixiebob"}, {"id": 46, "name": "Ragamuffin"}, {"id": 47, "name": "Ragdoll"}, {
  "id": 48,
  "name": "Russian Blue"
}, {"id": 49, "name": "Scottish Fold"}, {"id": 50, "name": "Selkirk Rex"}, {"id": 51, "name": "Siamese"}, {
  "id": 52,
  "name": "Siberian"
}, {"id": 53, "name": "Silver"}, {"id": 54, "name": "Singapura"}, {"id": 55, "name": "Snowshoe"}, {
  "id": 56,
  "name": "Somali"
}, {"id": 57, "name": "Sphynx / Hairless Cat"}, {"id": 58, "name": "Tabby"}, {"id": 59, "name": "Tiger"}, {
  "id": 60,
  "name": "Tonkinese"
}, {"id": 61, "name": "Torbie"}, {"id": 62, "name": "Tortoiseshell"}, {"id": 63, "name": "Toyger"}, {
  "id": 64,
  "name": "Turkish Angora"
}, {"id": 65, "name": "Turkish Van"}, {"id": 66, "name": "Tuxedo"}, {"id": 67, "name": "York Chocolate"}];

const rabbitBreeds = [{"id": 0, "name": "American"}, {"id": 1, "name": "American Fuzzy Lop"}, {
  "id": 2,
  "name": "American Sable"
}, {"id": 3, "name": "Angora Rabbit"}, {"id": 4, "name": "Belgian Hare"}, {"id": 5, "name": "Beveren"}, {
  "id": 6,
  "name": "Britannia Petite"
}, {"id": 7, "name": "Bunny Rabbit"}, {"id": 8, "name": "Californian"}, {
  "id": 9,
  "name": "Champagne D'Argent"
}, {"id": 10, "name": "Checkered Giant"}, {"id": 11, "name": "Chinchilla"}, {"id": 12, "name": "Cinnamon"}, {
  "id": 13,
  "name": "Creme D'Argent"
}, {"id": 14, "name": "Dutch"}, {"id": 15, "name": "Dwarf"}, {"id": 16, "name": "Dwarf Eared"}, {
  "id": 17,
  "name": "English Lop"
}, {"id": 18, "name": "English Spot"}, {"id": 19, "name": "Flemish Giant"}, {
  "id": 20,
  "name": "Florida White"
}, {"id": 21, "name": "French Lop"}, {"id": 22, "name": "Harlequin"}, {"id": 23, "name": "Havana"}, {
  "id": 24,
  "name": "Himalayan"
}, {"id": 25, "name": "Holland Lop"}, {"id": 26, "name": "Hotot"}, {"id": 27, "name": "Jersey Wooly"}, {
  "id": 28,
  "name": "Lilac"
}, {"id": 29, "name": "Lionhead"}, {"id": 30, "name": "Lop Eared"}, {"id": 31, "name": "Mini Lop"}, {
  "id": 32,
  "name": "Mini Rex"
}, {"id": 33, "name": "Netherland Dwarf"}, {"id": 34, "name": "New Zealand"}, {"id": 35, "name": "Palomino"}, {
  "id": 36,
  "name": "Polish"
}, {"id": 37, "name": "Rex"}, {"id": 38, "name": "Rhinelander"}, {"id": 39, "name": "Satin"}, {
  "id": 40,
  "name": "Silver"
}, {"id": 41, "name": "Silver Fox"}, {"id": 42, "name": "Silver Marten"}, {"id": 43, "name": "Tan"}];

const birdBreeds = [{"id": 0, "name": "African Grey"}, {"id": 1, "name": "Amazon"}, {
  "id": 2,
  "name": "Brotogeris"
}, {"id": 3, "name": "Budgie / Budgerigar"}, {"id": 4, "name": "Button-Quail"}, {"id": 5, "name": "Caique"}, {
  "id": 6,
  "name": "Canary"
}, {"id": 7, "name": "Chicken"}, {"id": 8, "name": "Cockatiel"}, {"id": 9, "name": "Cockatoo"}, {
  "id": 10,
  "name": "Conure"
}, {"id": 11, "name": "Dove"}, {"id": 12, "name": "Duck"}, {"id": 13, "name": "Eclectus"}, {
  "id": 14,
  "name": "Emu"
}, {"id": 15, "name": "Finch"}, {"id": 16, "name": "Goose"}, {"id": 17, "name": "Guinea Fowl"}, {
  "id": 18,
  "name": "Kakariki"
}, {"id": 19, "name": "Lory / Lorikeet"}, {"id": 20, "name": "Lovebird"}, {"id": 21, "name": "Macaw"}, {
  "id": 22,
  "name": "Ostrich"
}, {"id": 23, "name": "Parakeet (Other)"}, {"id": 24, "name": "Parrot (Other)"}, {
  "id": 25,
  "name": "Parrotlet"
}, {"id": 26, "name": "Peacock / Peafowl"}, {"id": 27, "name": "Pheasant"}, {"id": 28, "name": "Pigeon"}, {
  "id": 29,
  "name": "Pionus"
}, {"id": 30, "name": "Poicephalus / Senegal"}, {"id": 31, "name": "Quail"}, {
  "id": 32,
  "name": "Quaker Parakeet"
}, {"id": 33, "name": "Rhea"}, {"id": 34, "name": "Ringneck / Psittacula"}, {"id": 35, "name": "Rosella"}, {
  "id": 36,
  "name": "Swan"
}, {"id": 37, "name": "Toucan"}, {"id": 38, "name": "Turkey"}];

const smallAndFurryBreeds = [{"id": 0, "name": "Abyssinian"}, {"id": 1, "name": "Chinchilla"}, {
  "id": 2,
  "name": "Degu"
}, {"id": 3, "name": "Dwarf Hamster"}, {"id": 4, "name": "Ferret"}, {"id": 5, "name": "Gerbil"}, {
  "id": 6,
  "name": "Guinea Pig"
}, {"id": 7, "name": "Hamster"}, {"id": 8, "name": "Hedgehog"}, {"id": 9, "name": "Mouse"}, {
  "id": 10,
  "name": "Peruvian"
}, {"id": 11, "name": "Prairie Dog"}, {"id": 12, "name": "Rat"}, {"id": 13, "name": "Rex"}, {
  "id": 14,
  "name": "Short-Haired"
}, {"id": 15, "name": "Silkie / Sheltie"}, {"id": 16, "name": "Skunk"}, {"id": 17, "name": "Sugar Glider"}, {
  "id": 18,
  "name": "Teddy"
}];

const horseBreeds = [{"id": 0, "name": "Appaloosa"}, {"id": 1, "name": "Arabian"}, {
  "id": 2,
  "name": "Belgian"
}, {"id": 3, "name": "Clydesdale"}, {"id": 4, "name": "Connemara"}, {"id": 5, "name": "Curly Horse"}, {
  "id": 6,
  "name": "Donkey"
}, {"id": 7, "name": "Draft"}, {"id": 8, "name": "Friesian"}, {"id": 9, "name": "Gaited"}, {
  "id": 10,
  "name": "Grade"
}, {"id": 11, "name": "Haflinger"}, {"id": 12, "name": "Icelandic Horse"}, {"id": 13, "name": "Lipizzan"}, {
  "id": 14,
  "name": "Miniature Horse"
}, {"id": 15, "name": "Missouri Foxtrotter"}, {"id": 16, "name": "Morgan"}, {"id": 17, "name": "Mule"}, {
  "id": 18,
  "name": "Mustang"
}, {"id": 19, "name": "Paint / Pinto"}, {"id": 20, "name": "Palomino"}, {"id": 21, "name": "Paso Fino"}, {
  "id": 22,
  "name": "Percheron"
}, {"id": 23, "name": "Peruvian Paso"}, {"id": 24, "name": "Pony"}, {
  "id": 25,
  "name": "Pony of the Americas"
}, {"id": 26, "name": "Quarterhorse"}, {"id": 27, "name": "Rocky Mountain Horse"}, {
  "id": 28,
  "name": "Saddlebred"
}, {"id": 29, "name": "Shetland Pony"}, {"id": 30, "name": "Standardbred"}, {
  "id": 31,
  "name": "Tennessee Walker"
}, {"id": 32, "name": "Thoroughbred"}, {"id": 33, "name": "Warmblood"}];

const barnyardBreeds = [{"id": 0, "name": "Alpaca"}, {"id": 1, "name": "Alpine"}, {"id": 2, "name": "Angora"}, {
  "id": 3,
  "name": "Angus"
}, {"id": 4, "name": "Barbados"}, {"id": 5, "name": "Boer"}, {"id": 6, "name": "Cow"}, {
  "id": 7,
  "name": "Duroc"
}, {"id": 8, "name": "Goat"}, {"id": 9, "name": "Hampshire"}, {"id": 10, "name": "Holstein"}, {
  "id": 11,
  "name": "Jersey"
}, {"id": 12, "name": "LaMancha"}, {"id": 13, "name": "Landrace"}, {"id": 14, "name": "Llama"}, {
  "id": 15,
  "name": "Merino"
}, {"id": 16, "name": "Mouflon"}, {"id": 17, "name": "Myotonic / Fainting"}, {
  "id": 18,
  "name": "Nigerian Dwarf"
}, {"id": 19, "name": "Nubian"}, {"id": 20, "name": "Oberhasli"}, {"id": 21, "name": "Pig"}, {
  "id": 22,
  "name": "Pot Bellied"
}, {"id": 23, "name": "Pygmy"}, {"id": 24, "name": "Saanen"}, {"id": 25, "name": "Sheep"}, {
  "id": 26,
  "name": "Shetland"
}, {"id": 27, "name": "Toggenburg"}, {"id": 28, "name": "Vietnamese Pot Bellied"}, {"id": 29, "name": "Yorkshire"}]

const scalesBreeds = [{"id": 0, "name": "Asian Box"}, {"id": 1, "name": "Ball Python"}, {
  "id": 2,
  "name": "Bearded Dragon"
}, {"id": 3, "name": "Boa"}, {"id": 4, "name": "Boa Constrictor"}, {"id": 5, "name": "Box"}, {
  "id": 6,
  "name": "Bull"
}, {"id": 7, "name": "Bullfrog"}, {"id": 8, "name": "Burmese Python"}, {"id": 9, "name": "Chameleon"}, {
  "id": 10,
  "name": "Corn / Rat"
}, {"id": 11, "name": "Eastern Box"}, {"id": 12, "name": "Fire Salamander"}, {
  "id": 13,
  "name": "Fire-Bellied"
}, {"id": 14, "name": "Fire-Bellied Newt"}, {"id": 15, "name": "Florida Box"}, {
  "id": 16,
  "name": "Freshwater Fish"
}, {"id": 17, "name": "Frog"}, {"id": 18, "name": "Garter / Ribbon"}, {"id": 19, "name": "Gecko"}, {
  "id": 20,
  "name": "Goldfish"
}, {"id": 21, "name": "Hermit Crab"}, {"id": 22, "name": "Horned Frog"}, {"id": 23, "name": "Iguana"}, {
  "id": 24,
  "name": "King / Milk"
}, {"id": 25, "name": "Leopard"}, {"id": 26, "name": "Leopard Frog"}, {"id": 27, "name": "Lizard"}, {
  "id": 28,
  "name": "Mississippi Map Turtle"
}, {"id": 29, "name": "Monitor"}, {"id": 30, "name": "Mud"}, {"id": 31, "name": "Musk"}, {
  "id": 32,
  "name": "Oregon Newt"
}, {"id": 33, "name": "Ornamental Box"}, {"id": 34, "name": "Other"}, {
  "id": 35,
  "name": "Paddle Tailed Newt"
}, {"id": 36, "name": "Painted"}, {"id": 37, "name": "Python"}, {"id": 38, "name": "Red Foot"}, {
  "id": 39,
  "name": "Red-Eared Slider"
}, {"id": 40, "name": "Russian"}, {"id": 41, "name": "Saltwater Fish"}, {"id": 42, "name": "Scorpion"}, {
  "id": 43,
  "name": "Snake"
}, {"id": 44, "name": "Snapping"}, {"id": 45, "name": "Soft Shell"}, {"id": 46, "name": "Southern"}, {
  "id": 47,
  "name": "Sulcata"
}, {"id": 48, "name": "Tarantula"}, {"id": 49, "name": "Three-Toed Box"}, {
  "id": 50,
  "name": "Tiger Salamander"
}, {"id": 51, "name": "Toad"}, {"id": 52, "name": "Tortoise"}, {"id": 53, "name": "Tree Frog"}, {
  "id": 54,
  "name": "Turtle"
}, {"id": 55, "name": "Uromastyx"}, {"id": 56, "name": "Water Dragon"}, {"id": 57, "name": "Yellow-Bellied Slider"}];

const breeds = {
  Dog: dogBreeds,
  Cat: catBreeds,
  Rabbit: rabbitBreeds,
  Bird: birdBreeds,
  ["Small & Furry"]: smallAndFurryBreeds,
  Horse: horseBreeds,
  Barnyard: barnyardBreeds,
  ["Scales, Fins & Other"]: scalesBreeds
}

const coats = {
  Dog: ['Hairless', 'Short', 'Medium', 'Long', 'Wire', 'Curly'],
  Cat: ['Hairless', 'Short', 'Medium', 'Long'],
  Rabbit: ['Short', 'Long'],
  Bird: [],
  ["Small & Furry"]: ['Hairless', 'Short', 'Long'],
  Horse: [],
  Barnyard: ['Short', 'Long'],
  ["Scales, Fins & Other"]: []
}

export {breeds, coats};
