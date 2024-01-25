import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/components/component-funcionality/services/login/login.service';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private loginservice: LoginService) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/attendance",
      icon: "grid",
      menu: "Asistencias",
    },
    {
      link: "/operativeunit",
      icon: "grid",
      menu: "Unidades Operativas",
    },
    {
      link: "/program-form",
      icon: "grid",
      menu: "Programas",
    },
    {
      link: "/unitprogram",
      icon: "grid",
      menu: "Asignación De Programas a una Unidad Operativa",
    },
    {
      link: "/teen",
      icon: "grid",
      menu: "Adolescentes",
    },
    {
      link: "/funcionary",
      icon: "disc",
      menu: "Funcionarios",
    },
    {
      link: "/asignation",
      icon: "disc",
      menu: "Asignación",
    },
    {
      link: "/trans-dist",
      icon: "disc",
      menu: "Expediente_Digital",
    },
    {
      link: "/adolescent-form",
      icon: "disc",
      menu: "Programs",
    },
    {
      link: "/adolescent-list",
      icon: "disc",
      menu: "Programs List",
    },
    {
      link: "/activities-principal",
      icon: "book",
      menu: "Actividades",
    },
    {
      link: "/historial",
      icon: "info",
      menu: "Historial",
    },
    {
      link: "/entidades",
      icon: "layers",
      menu: "Entidades Cooperantes",
    },
    {
      link: "/programa-actividad",
      icon: "layers",
      menu: "Asignación Programa a actividad",
    },
    {
      link: "/notificaciones",
      icon: "layers",
      menu: "Notificación de informes",
    },

  ]
  login() {
    this.loginservice.login();
  }

  logout() {
    this.loginservice.logout();
  }
}
