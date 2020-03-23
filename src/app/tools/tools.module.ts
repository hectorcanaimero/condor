import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './helper/product/product.component';
import { PostComponent } from './helper/post/post.component';
import { HeaderComponent } from './widget/header/header.component';
import { FooterComponent } from './widget/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { MidiaComponent } from './helper/midia/midia.component';
import { MenuVerticalComponent } from './helper/menu-vertical/menu-vertical.component';
import { BlogComponent } from './conteudo/blog/blog.component';
import { TituloComponent } from './helper/titulo/titulo.component';
import { ImprensaComponent } from './helper/imprensa/imprensa.component';
import { NewsComponent } from './conteudo/news/news.component';
import { CarouselComponent } from './conteudo/carousel/carousel.component';
import { ImageComponent } from './helper/image/image.component';
import { MenuTopComponent } from './helper/menu-top/menu-top.component';
import { MenuOfertasComponent } from './helper/menu-ofertas/menu-ofertas.component';
import { SidebarComponent } from './helper/sidebar/sidebar.component';

@NgModule({
  declarations: [
    ProductComponent, PostComponent,
    HeaderComponent, FooterComponent,
    MidiaComponent, MenuVerticalComponent,
    BlogComponent, TituloComponent,
    ImprensaComponent, NewsComponent,
    CarouselComponent, ImageComponent,
    MenuTopComponent, MenuOfertasComponent,
    SidebarComponent
  ],
  exports: [
    ProductComponent, PostComponent,
    HeaderComponent, FooterComponent,
    MidiaComponent, MenuVerticalComponent,
    BlogComponent, TituloComponent,
    ImprensaComponent, NewsComponent,
    CarouselComponent, ImageComponent,
    MenuTopComponent, MenuOfertasComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RouterModule
  ]
})
export class ToolsModule { }
