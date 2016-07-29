# ionic2 & angulartics2
trying to integrate piwik, ionic2 (based on cordova and angular2) 
and angulartic2 for great and open-source analytics capabilites

However I face some strange problems regarding the initialization of the angulartic2 component. Hopefully you can help.
The error is: 
 
 ```
 TypeError: this._platformStrategy.getBaseHref is not a function
 ```
after registering the following providers:
```
Angulartics2,
Location,
LocationStrategy
```
