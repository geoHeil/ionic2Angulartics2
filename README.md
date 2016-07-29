# ionic2 & angulartics2
trying to integrate piwik, ionic2 (based on cordova and angular2) 
and angulartic2 for great and open-source analytics capabilites

However I face some strange problems regarding the initialization of the angulartic2 component. Hopefully you can help.

## Install & Start

```bash
git clone https://github.com/geoHeil/ionic2Angulartics2.git
cd ionic2Angulartics2
npm install       # or `npm run reinstall` if you get an error
ionic serve
```
Running as root? You probably shouldn't be. If you need to: `npm run postinstall` before `npm start`. [#111](https://github.com/lathonez/clicker/issues/111) for more info.


## The error is: 
 
 ```
 TypeError: this._platformStrategy.getBaseHref is not a function
 ```
after registering the following providers:
```
Angulartics2,
Location,
LocationStrategy
```
