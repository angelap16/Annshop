import { Component, OnInit,SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  shop:any
  verDetalles=false;
  carrito=false;
   sliderContent = [
    { image: './assets/slide-1.jpg', alt: 'Image 1', title: "Amigurumis", subtitle: "Cool summer sale"},
    { image: './assets/slide-2.jpg', alt: 'Image 2',title: "Amigurumis", subtitle: "Cool summer sale" },
    { image: './assets/slide-3.jpg', alt: 'Image 3',title: "Amigurumis", subtitle: "Cool summer sale" }
  ];
  currentSlide = 0;
  mostrar:any;
  slider:any;
  rutaActiva:string=window.location.pathname;
  constructor(
    private servicio:DataService,
    private router:Router,
    private productService:DatabaseService) { }

  ngOnInit(): void {
    this.shop=true;
    this.slider= document.getElementById('slider') as HTMLDivElement;
    console.log("ruta",this.rutaActiva);
   if(this.rutaActiva=="/home"){
      //this.automaticSlides() 
    } 
    this.productService.getProducts().subscribe((products:any)=>{
      this.products= products;})
  }

  detalles(item:any){
    this.servicio.enviarDatosProducto=item
    console.log('ITEM',item);
    this.slider.classList.add('slider--stopped');
    this.router.navigate(['/detalles'])
  }
    automaticSlides(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    console.log("SLIDERR", this.slider);
    console.log("slider last", sliderSectionLast);
    this.slider.insertAdjacentElement('afterbegin', sliderSectionLast); 
     setInterval(()=>{
      this.next();
    }, 5000); 
  }
   next(){
    console.log("ruta",this.rutaActiva);
    //console.log('log',this.rutaActiva=="/home");
    if(this.rutaActiva == '/home'){
      console.log("ruta",this.rutaActiva);
      let sliderSectionFirst = document.querySelectorAll(".slider__section")[0] as HTMLElement;
      console.log('SLIDER FIRST', sliderSectionFirst);
      this.slider.style.marginLeft = "-200%";
      this.slider.style.transition = "all 0.8s";
      setTimeout(()=>{
        this.slider.style.transition = "none";
        this.slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        this.slider.style.marginLeft = "-100%";
      }, 500);
    }else{
      alert("no funciono if next")
    }
   
  }
  prev(){
    console.log("ruta",this.rutaActiva);
    //console.log('log',this.rutaActiva=="/home");
    if(this.rutaActiva== "/home"){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    this.slider.style.marginLeft = "0";
    this.slider.style.transition = "all 0.5s";
    setTimeout(()=>{
      this.slider.style.transition = "none";
      this.slider.insertAdjacentElement('afterbegin', sliderSectionLast);
      this.slider.style.marginLeft = "-100%";
    }, 500);
  }else{
    alert("no funciono if prev")
  }
 }  
   showSlides() {
    let sliderSection = document.querySelectorAll(".slider__section") as unknown as HTMLElement;
    sliderSection.style.display="none"
    this.currentSlide = (this.currentSlide + 1) % this.sliderContent.length;
    setTimeout(() => {
      this.showSlides()
      console.log("slide",this.currentSlide);
    },10000);
  }
  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.sliderContent.length) % this.sliderContent.length;
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderContent.length;
  } 

}
