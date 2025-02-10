import { LdoJsonldContext } from "@ldo/jsonld-dataset-proxy";

/**
 * =============================================================================
 * contactsContext: JSONLD Context for contacts
 * =============================================================================
 */
export const contactsContext: LdoJsonldContext = {
  AddressBook: {
    "@id": "http://www.w3.org/2006/vcard/ns#AddressBook",
    "@context": {
      type: {
        "@id": "@type",
      },
      title: {
        "@id": "http://purl.org/dc/terms/title",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true,
      },
      nameEmailIndex: {
        "@id": "http://www.w3.org/2006/vcard/ns#nameEmailIndex",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true,
      },
      groupIndex: {
        "@id": "http://www.w3.org/2006/vcard/ns#groupIndex",
        "@type": "@id",
      },
      includesGroup: {
        "@id": "http://www.w3.org/2006/vcard/ns#includesGroup",
        "@type": "@id",
        "@isCollection": true,
      },
      inAddressBook: {
        "@id": "http://www.w3.org/2006/vcard/ns#inAddressBook",
        "@type": "@id",
        "@isCollection": true,
      },
    },
  },
  Group: {
    "@id": "http://www.w3.org/2006/vcard/ns#Group",
    "@context": {
      type: {
        "@id": "@type",
      },
      fn: {
        "@id": "http://www.w3.org/2006/vcard/ns#fn",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true,
      },
      member: {
        "@id": "http://www.w3.org/2006/vcard/ns#member",
        "@type": "@id",
        "@isCollection": true,
      },
    },
  },
  Individual: {
    "@id": "http://www.w3.org/2006/vcard/ns#Individual",
    "@context": {
      type: {
        "@id": "@type",
      },
      fn: {
        "@id": "http://www.w3.org/2006/vcard/ns#fn",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
        "@isCollection": true,
      },
      hasUID: {
        "@id": "http://www.w3.org/2006/vcard/ns#hasUID",
        "@type": "@id",
      },
      hasName: {
        "@id": "http://www.w3.org/2006/vcard/ns#hasName",
        "@type": "@id",
      },
      hasPhoto: {
        "@id": "http://www.w3.org/2006/vcard/ns#hasPhoto",
        "@type": "@id",
        "@isCollection": true,
      },
      hasRelated: {
        "@id": "http://www.w3.org/2006/vcard/ns#hasRelated",
        "@type": "@id",
        "@isCollection": true,
      },
      url: {
        "@id": "http://www.w3.org/2006/vcard/ns#url",
        "@type": "@id",
        "@isCollection": true,
      },
      hasAddress: {
        "@id": "http://www.w3.org/2006/vcard/ns#hasAddress",
        "@type": "@id",
        "@isCollection": true,
      },
      bday: {
        "@id": "http://www.w3.org/2006/vcard/ns#bday",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
      },
      anniversary: {
        "@id": "http://www.w3.org/2006/vcard/ns#anniversary",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
      },
      hasEmail: {
        "@id": "http://www.w3.org/2006/vcard/ns#hasEmail",
        "@type": "@id",
      },
      hasTelephone: {
        "@id": "http://www.w3.org/2006/vcard/ns#hasTelephone",
        "@type": "@id",
      },
      organizationName: {
        "@id": "http://www.w3.org/2006/vcard/ns#organization-name",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      role: {
        "@id": "http://www.w3.org/2006/vcard/ns#role",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      title: {
        "@id": "http://www.w3.org/2006/vcard/ns#title",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      note: {
        "@id": "http://www.w3.org/2006/vcard/ns#note",
        "@type": "http://www.w3.org/2001/XMLSchema#string",
      },
      sameAs: {
        "@id": "http://www.w3.org/2002/07/owl#sameAs",
        "@type": "@id",
        "@isCollection": true,
      },
    },
  },
  givenName: {
    "@id": "http://www.w3.org/2006/vcard/ns#given-name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  familyName: {
    "@id": "http://www.w3.org/2006/vcard/ns#family-name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  additionalName: {
    "@id": "http://www.w3.org/2006/vcard/ns#additional-name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  honorificPrefix: {
    "@id": "http://www.w3.org/2006/vcard/ns#honorific-prefix",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  honorificSuffix: {
    "@id": "http://www.w3.org/2006/vcard/ns#honorific-suffix",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  WebID: {
    "@id": "http://www.w3.org/2006/vcard/ns#WebID",
    "@context": {
      type: {
        "@id": "@type",
      },
      value: {
        "@id": "http://www.w3.org/2006/vcard/ns#value",
        "@type": "@id",
      },
    },
  },
  streetAddress: {
    "@id": "http://www.w3.org/2006/vcard/ns#street-address",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  locality: {
    "@id": "http://www.w3.org/2006/vcard/ns#locality",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  postalCode: {
    "@id": "http://www.w3.org/2006/vcard/ns#postal-code",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  countryName: {
    "@id": "http://www.w3.org/2006/vcard/ns#country-name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  Email: {
    "@id": "http://www.w3.org/2006/vcard/ns#Email",
    "@context": {
      type: {
        "@id": "@type",
      },
      value: {
        "@id": "http://www.w3.org/2006/vcard/ns#value",
        "@type": "@id",
      },
    },
  },
  Tel: {
    "@id": "http://www.w3.org/2006/vcard/ns#Tel",
    "@context": {
      type: {
        "@id": "@type",
      },
      value: {
        "@id": "http://www.w3.org/2006/vcard/ns#value",
        "@type": "@id",
      },
    },
  },
};
