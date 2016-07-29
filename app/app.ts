import { Component } from "@angular/core";
import { Platform, ionicBootstrap } from "ionic-angular";
import { StatusBar } from "ionic-native";
import { TabsPage } from "./pages/tabs/tabs";
import { Angulartics2 } from "angulartics2";
import { Angulartics2Piwik } from "angulartics2/src/providers/angulartics2-piwik";
import { Location, LocationStrategy } from "@angular/common";


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Angulartics2Piwik]
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform, angulartics2: Angulartics2, angulartics2Piwik: Angulartics2Piwik) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
  Angulartics2,
  Location,
  LocationStrategy
]);
