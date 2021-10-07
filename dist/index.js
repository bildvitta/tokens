(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Tokens = {}));
}(this, (function (exports) { 'use strict';

  const companies = {
    bild: {
      brand: require('../assets/brands/bild'),
      color: '#ed7203',
      name: 'Bild',
      domains: ['bild.com.br']
    },
    exklusiv: {
      brand: require('../assets/brands/exklusiv'),
      color: '#3e3a35',
      name: 'Bild Exklusiv',
      domains: ['bildexklusiv.com.br']
    },
    vitta: {
      brand: require('../assets/brands/vitta'),
      color: '#006cbb',
      name: 'Vitta Residencial',
      domains: ['attivcorrespondente.com.br', 'vendasvitta.com.br', 'vittaconsorcio.com.br', 'vittaresidencial.com.br']
    },
    fegik: {
      brand: require('../assets/brands/fegik'),
      color: '#132f4d',
      name: 'Fegik',
      domains: ['fegik.com.br']
    },
    veraz: {
      brand: require('../assets/brands/veraz'),
      color: '#e66d2d',
      name: 'Veraz',
      domains: ['verazseguros.com.br']
    }
  };

  function getCompanyByDomain (domain) {
    for (const key in companies) {
      if (companies[key].domains.includes(domain)) {
        return companies[key];
      }
    }
  }

  function getCompanyByEmail (email) {
    return getCompanyByDomain(email.split('@')[1]);
  }

  exports.companies = companies;
  exports.getCompanyByDomain = getCompanyByDomain;
  exports.getCompanyByEmail = getCompanyByEmail;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
