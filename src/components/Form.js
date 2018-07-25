// import React, { Component } from 'react';
// import './Form.css';

// class Form extends Component {
//   render () {
//     return (
//       <div class="wrapper">
//         <form id="form" class="form" action="index.html" method="post" name="form">
//           <section class="form__fieldset-design js__dropdown visible">
//             <div class="legend__container js__dropdown-title">
//               <legend class="fieldset__legend"><i class="far fa-object-ungroup icon__primary--medium"></i><span class="text__dark--title">diseña</span></legend>
//               <i class="fas fa-angle-up arrow legend__arrow icon__rotation"></i>
//             </div>
//             <div class="design__container js__dropdown-content">
//               <div class="item-container item-container--color">
//                 <div class="text__dark--small">colores</div>
//                 <div class="radio-container">
//                   <div class="palette palette--margin">
//                     <input id="color1" class="input__storage" type="radio" name="palette" radio-cual="1" value="1" checked>
//                     <label for="color1" class="label-design">
//                       <span></span>
//                       <div class="palette-box colorp1"></div>
//                       <div class="palette-box colorp2"></div>
//                       <div class="palette-box colorp3"></div>
//                     </label>
//                   </div>
//                   <div class="palette palette--margin">
//                     <input id="color2" class="input__storage" type="radio" name="palette" radio-cual="2" value="2">
//                     <label for="color2" class="label-design">
//                       <span></span>
//                       <div class="palette-box colorp4"></div>
//                       <div class="palette-box colorp5"></div>
//                       <div class="palette-box colorp6"></div>
//                     </label>
//                   </div>
//                   <div class="palette">
//                     <input id="color3" class="input__storage" type="radio" name="palette" radio-cual="3" value="3">
//                     <label for="color3" class="label-design">
//                       <span></span>
//                       <div class="palette-box colorp7"></div>
//                       <div class="palette-box colorp8"></div>
//                       <div class="palette-box colorp9"></div>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div class="item-container">
//                 <div class="text__dark--small">fuentes</div>
//                 <div class="radio-container">
//                   <div class="font font--margin">
//                     <input id="font1" class="input__storage" type="radio" name="typography" radio-cual="4" value="1">
//                     <label for="font1" class="text__optional--ubuntu label-design"><span></span> Ubuntu</label>
//                   </div>
//                   <div class="font font--margin">
//                     <input id="font2" class="input__storage" type="radio" name="typography" radio-cual="5" value="2" checked>
//                     <label for="font2" class="text__optional--comic label-design"><span></span> Comic Sans</label>
//                   </div>
//                   <div class="font">
//                     <input id="font3" class="input__storage" type="radio" name="typography" radio-cual="6" value="3">
//                     <label for="font3" class="text__optional--mont label-design"><span></span> Montserrat</label>
//                   </div>
//                 </div>
//               </div>
//             </section>

//               <!-- FORMULARIO-RELLENA -->
//               <section class="fieldset js__dropdown">
//                 <div class="legend__container js__dropdown-title">
//                   <div class="legend">
//                     <i class="icon__primary--medium far fa-keyboard"></i>
//                     <h1 class="text__dark--title">Rellena</h1>
//                   </div>
//                   <i class="fas fa-angle-down arrow legend__arrow icon__rotation"></i>
//                 </div>
//                 <div class="js__dropdown-content">
//                   <div class="item">
//                     <label class="item__label" for="name">Nombre completo</label>
//                     <input class="input item__input form-field--name input__storage " id="name" type="text" name="name" placeholder="Ej: Sally Jill" data-donde="element-name" required>
//                   </div>
//                   <div class="item">
//                     <label class="item__label" for="job">Puesto</label>
//                     <input class="input item__input form-field--role input__storage" id="job" type="text" name="job" placeholder="Ej: Front-end unicorn" data-donde="element-role" required>
//                   </div>
//                   <div class="item">
//                     <label class="item__label" for="image">Imagen de perfil</label>
//                     <div class="item__addfile">
//                       <button class="item__button-file item__button-label" type="button">Añadir imagen</button>
//                       <input class="input input__file--hidden input__storage" id="image" type="file" name="photo" required>
//                       <div class="item-preview"><img class="item-preview__img" src="http://placehold.it/29x29/ffffff/ffffff"></img></div>
//                   </div>
//                   </div>
//                   <div class="item">
//                     <label class="item__label" for="email">Email</label>
//                     <input class="input item__input form-field--mail input__storage"
//                     id="email" type="email" name="email" placeholder="Ej: sally-hill@gmail.com" data-donde="element-mail" required>
//                   </div>
//                   <div class="item">
//                     <label class="item__label" for="phone">Teléfono</label>
//                     <input class="input item__input form-field--tel input__storage" id="phone" type="tel" name="phone" placeholder="Ej: 555 55 55 55" data-donde="element-tel" required>
//                   </div>
//                   <div class="item">
//                     <label class="item__label" for="linkedin">Linkedin</label>
//                     <input class="input item__input form-field--lin input__storage" id="linkedin" type="url" name="linkedin" placeholder="Ej: sally.hill" data-donde="element-lin" required>
//                   </div>
//                   <div class="item">
//                     <label class="item__label" for="github">Github</label>
//                     <input class="input item__input form-field--gh input__storage" id="github" type="text" name="github" placeholder="Ej: sally-hill" data-donde="element-gh" required>
//                   </div>
//                   <div class="item js__select-container">
//                     <label class="item__label" for="abilities">Habilidades (máximo 3)</label>
//                   </div>
//                 </div>
//               </section>


//             <!-- Sección Comparte -->

//             <section class="share js__dropdown">
//               <div class="share__header js__dropdown-title">
//                 <div class="share__icon-title">
//                   <i class="icon__primary--medium fas fa-share-alt"></i>
//                   <h2 class="text__dark--title share__title">comparte</h2>
//                 </div>
//                 <i class="fas fa-angle-down arrow legend__arrow icon__rotation"></i>
//               </div>
//               <div class="js__dropdown-content share__content-parent">
//                 <div class="share__content">
//                   <button id="submit" class="btn-card btn-card--position btn-card--text boton-card--active" type="button" name="button"><i class="far fa-address-card icon-card"></i>Crear tarjeta</button>
//                 </div>
//                 <div class="card-created hidden__item">
//                   <h3 class="text__dark--title card-created__title">La tarjeta ha sido creada:</h3>
//                   <p class="card-link text__card-link response"></p>
//                   <a class="link-twitter" href="" target="_blank"><button class="btn-twitter btn-twitter--position btn-twitter--text" type="button" name="button"><i class="fab fa-twitter icon-twitter"></i>Compartir en twitter</button></a>
//                 </div>
//               </div>
//             </section>
//         </form>
//         </div>
//       </main>
//     );
//   }
// }


// export default Form;
