// 1- Accueil caroussel
const accueil = {
  template:
    `<div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">  
          <div class="carousel-item active ">
            <img src="fot7.jpg" class=" d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="fot18.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item ">
            <img src="fot5.jpg" class="d-block w-100" alt="...">
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div>
        <h1> <span class="apo-adnen">Adnen's</span> E-Book </h1>
        <h5> Depuis la naissance du livre éléctronique,<span class="apo-adnen">Adnen's</span> E-book était présent pour vous sélectionner les 30 meilleurs succès du moment des trois catégories Sciences-Fiction, Horreur et Romance. catégories les plus lues durant ces dernières années. Plongez dans votre univers préféré en visitant le plus beau store du web.</h5>
      </div>
    </div>` };

// 02- Début Store -----------------------------------------Component Store -------------- 
const store = {
  template:
    `<div>

<div class="container-fluid">
  <div class="row">

    <div class="col">
      <div v-for="(livre, index) in livres">
        <div class="card apo-card" style="width: 18rem;">
          <img :src="livre.image" class="card-img-top" alt="ko">
          <div class="card-body">
                  <h5 class="card-title apo-nomcard">{{livre.titre}}</h5>
                  <p class="card-text"><span class="apo-elem-card">Catégorie</span>: {{livre.cat}}</p>
                  <p class="card-text"><span class="apo-elem-card">Référence</span>: {{livre.ref}}</p>
                  <p class="card-text"><span class="apo-elem-card">Date de parution</span>: {{livre.date}}</p>
                  <p class="card-text"><span class="apo-elem-card">Quantité en stock</span>: {{livre.qt}}</p>
                  <p class="card-text"><span class="apo-elem-card">Prix HT</span>: {{livre.prixht}}</p>

                  <button v-on:click="ajouter(livre); counter += 1" class="btn btn-primary"> Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>

    <div class="col">

      <p class="apo-form-contact"> Panier </p>

      <div>
      <p class="apo-total">Vous avez {{ counter }} livres dans votre panier</p>
      <button v-on:click="calc" class="btn btn-primary"> Valeur TTC de votre panier </button>
      <p v-show="good" > <span class="apo-total">Le total TTC du panier est : {{totalttc}} </span></p>
      </div>

    <div>
        <button v-on:click="isShow =! isShow" class="btn btn-primary"> Saisir votre Nom et votre Prénom avant validation de votre panier</button>

        <form v-show="isShow">

          <div class="form-group">
            <label  for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Prénom</span></label>
            <input v-model="prenom" class="form-control" type="text" placeholder="prénom ">
            <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Nom</span></label>
            <input v-model="nom" class="form-control" type="text" placeholder="nom">
            <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Age</span></label>
            <input v-model="age" class="form-control" type="text" placeholder="âge">
          </div>

          <button v-on:click=" (isShow=false, isShow2=true), verif" type="submit" class="btn btn-primary">Valider votre panier</button>

        </form>

        <form v-show="isShow2" class="apo-form-contact-corps">

          <div class="form-group">
            <button v-on:click="messenvoi" type="submit" class="btn btn-primary apo-postale">Entrez vos coordonnées postales pour finaliser la commande</button> <br>
            <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Nom</span></label>
            <input class="form-control" type="text" placeholder="Nom ">
            <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Adresse</span></label>
            <input class="form-control" type="text" placeholder="Adresse">
            <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Code postal</span></label>
            <input class="form-control" type="text" placeholder="code postal">
            <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Ville</span></label>
            <input class="form-control" type="text" placeholder="ville">
          </div>

          <button v-on:click="messenvoi, isShow3=true" type="submit" class="btn btn-primary">Valider votre commande</button> 

          <div v-show="isShow3" class="alert alert-primary" role="alert">
            Féllicitation ! Votre commande a bien été enregistrée. Vous allez la recevoir à l'adresse que vous avez renseignée. Bonne lecture :)
            <buttton v-on:click="isShow3=false" class="btn btn-primary">Quitter </button>
          </div>

          <input type="reset" value="Réinitialiser" class="btn btn-primary">
        </form>

    </div>

    </div>

        <div class="col">

          <div class="apo-panier"> 
              <div v-show="!isShow" v-for ="(item, index) in panier" >
                  <div class="card apo-card" style="width: 18rem;">
                      <img :src="item.image" class="card-img-top" alt="ko">
                      <div class="card-body">
                          <h5 class="card-title">{{item.titre}}</h5>
                              <p class="card-text">Catégorie: {{item.cat}}</p>
                              <p class="card-text">Référence: {{item.ref}}</p>
                              <p class="card-text">Date de parution: {{item.date}}</p>
                              <p class="card-text">Quantité en stock: {{item.qt}}</p>
                              <p class="card-text">Prix HT: {{item.prixht}}</p>
                              <button v-on:click="ajouter(item), counter += 1" class="btn btn-primary"> Ajouter un autre exempleire</button>
                              <button v-on:click="supp(index), counter-=1" class="btn btn-primary"> Supprimer du panier</button>
                      </div>
                  </div>
              </div>
          </div>

        </div>

    </div>
    </div>
  </div>
</div>`,

  data: function () {
    return ({

      isShow: false,
      good: false,
      isShow2: false,
      isShow3: false,
      totalht: 0,
      totalttc: 0,
      counter: 0,
      nom: "",
      prenom: "",
      age: 0,
      message: "",

      livres: [
        {
          titre: "Transformers", cat: "sciences-fiction", ref: 1023225, qt: 23, date: "01/10/2020", prixht: 15, image: "mega.jpg"
        },
        {
          titre: "2012", cat: "sciences-fiction", ref: 1026625, qt: 23, date: "02/10/2020", prixht: 20, image: "deux.jpg"
        },
        {
          titre: "Annabelle", cat: "horreur", ref: 3542569, qt: 23, date: "03/10/2020", prixht: 25, image: "anabel.jpg"
        },
        {
          titre: "The Grudge", cat: "horreur", ref: 4456921, qt: 23, date: "04/10/2020", prixht: 30, image: "gru.jpg"
        },
        {
          titre: "Pretty Women", cat: "romance", ref: 5113622, qt: 23, date: "05/10/2020", prixht: 40, image: "pret.jpg"
        },
        {
          titre: "Grey's Anatomy", cat: "romance", ref: 6524881, qt: 23, date: "06/10/2020", prixht: 50, image: "grey.jpg"
        }
      ],
      panier: [],
    });
  },

  computed: {
    totalprix() {

      console.log(totalht)
      return totalht
    },
  },

  methods: {
    ajouter(livre) {
      this.panier.push(livre);
      console.log(this.panier)
    },

    supp(index) {
      this.panier.splice(index, 1);
      console.log(this.panier)
    },
    calc() {
      var ht = 0;
      this.panier.forEach(item => {
        ht += item.prixht
        console.log(ht)
      })
      this.totalttc = ht * 1.2;
      console.log(this.totalttc)
      this.good = true;
    },

    verif() {
      if (!isNaN(this.prenom) || !isNaN(this.nom) || (isNaN(this.age) || this.age % 1 !== 0 || this.age === "")) {
        console.log("La saisie est invalide")
      }
      else {
        alert("Merci")
      }
    },

    messenvoi() {
      alert("Féllicitation ! Votre commande a bien été enregistrée. Vous allez la recevoir à l'adresse que vous avez renseignée. Bonne lecture :)"),
        isShow = false,
        message = "Féllicitation commande validée"
    },
  },
};
// 2- Fin Store -----------------------------------------Component Store -------------- 

// 3- Formulaire de contact -----------------------------------------Component formulaire de contact -------------- 
const confi = {
  template:
    `<div>

      <div class="container-fluid">
            <div class="row">
                <div class="col">
                  <p class="apo-form-contact"> Formulaire de contact </p> 


                  <form v-show="!isShow" class="apo-form-contact-corps">
                    <div class="form-group">
                      <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Nom</span></label>
                      <input class="form-control" type="text" placeholder="Nom ">
                      <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Adresse</span></label>
                      <input class="form-control" type="text" placeholder="Adresse">
                      <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Code postal</span></label>
                      <input class="form-control" type="text" placeholder="code postal">
                      <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Ville</span></label>
                      <input class="form-control" type="text" placeholder="ville">
                  </div>

                  <button v-on:click="messenvoi" type="submit" class="btn btn-primary">Valider votre commande</button>
                  <input type="reset" value="Réinitialiser" class="btn btn-primary">
                  </form>

                </div>
            </div>
      </div>

</div > `,

  data: function () {
    return ({
      isShow: false,
    });
  },

  methods: {
    messenvoi() {
      alert("Nous avons bien enregistré vos informations de contact :) "),
        isShow = false
    },
  },
};
// 03- FIN Formulaire de contact -----------------------------------------FIN Component formulaire de contact --------------

// 4- Début LIvre d'Or -----------------------------------------Début LIvre d'Or --------------
const livor = {
  template:
    `<div>
  
      <p class="apo-form-contact"> Livre d'Or </p> <br>

  <div class="container-fluid">
    <div class="row apo-form-contact-corps">
      <div class="col">
        <div v-for="(elem, index) in commentaires">
          <p >  <span class="apo-num-input">{{index+1}}</span><span class="apo-num-list">Pseudo</span> <span class="apo-num-input"> {{elem.tabpseudo}}</span>- <span class="apo-num-list">Date</span> <span class="apo-num-input">{{elem.tabdate}}</span>-<span class="apo-num-list">Commentaire</span> <span class="apo-num-input">{{elem.tabcommentaire}}</span></p>        
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">

        <div>
          <form class="apo-form-contact-corps">
            <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Pseudo</span></label>
            <input v-model="inpseudo" class="form-control" type="text" placeholder="pseudo ">
            <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez la date de votre commentaire</span></label>
            <input v-model="indate" class="form-control" type="text" placeholder="date">
            <label for="exampleInputPassword1"><span class="apo-elem-form">Entrez votre Commentaire</span></label>
            <input v-model="incommentaire" class="form-control" type="text" placeholder="J'ai passé une excellente expérience sur Adnen's E-book :) "> <br>
          
            <button v-on:click="ajoutercommentaire" type="submit" class="btn btn-primary">Envoyer votre commentaire</button>
            <input type="reset" value="Réinitialiser" class="btn btn-primary">
          </form>
        </div>

      </div>
    </div>

    </div>
    </div>
  </div>
  </div>`,

  data: function () {
    return ({
      isShow: true,
      commentaires: [],
      inpseudo: "",
      indate: "",
      incommentaire: ""
    })
  },
  methods: {
    ajoutercommentaire() {
      this.commentaires.push({
        tabpseudo: this.inpseudo,
        tabdate: this.indate,
        tabcommentaire: this.incommentaire
      }
      );
      console.log(this.commentaires)
    },
  }
}

// 04- FIN livre d'Or -----------------------------------------FIN Component Livre d'Or --------------

// 2. Définissez des routes.
// Chaque route doit correspondre à un composant.
var routes = [
  { path: '/accueil', component: accueil },
  { path: '/store', component: store },
  { path: '/confi', component: confi },
  { path: '/livor', component: livor },
]

// 3. Créez l'instance du routeur et passez l'option `routes`.

const router = new VueRouter({
  routes: routes
})

var vm = new Vue({
  el: "#app",
  data: {},
  methods: {},
  components: { accueil },
  router: router
});
