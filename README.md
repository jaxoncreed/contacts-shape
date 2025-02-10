# @ldshape/contacts

A shape for contacts and address-book related items.

This project includes shapes and generated files for [LDO](https://ldo.js.org).

## Installation

```bash
npm i @ldshape/contacts
```


## contacts

### Usage with LDO

```typescript
import { createLdoDataset } from "@ldo/ldo";
import { AddressBookShapeShapeType, AddressBookIndividualShapeShapeType, AddressBookEmailShapeShapeType, AddressBookTelephoneShapeShapeType, AddressBookWebPageShapeShapeType, AddressBookNameShapeShapeType, AddressBookAddressShapeShapeType, AddressBookGroupShapeShapeType } from "@ldshape/contacts";
import type { AddressBookShape, AddressBookIndividualShape, AddressBookEmailShape, AddressBookTelephoneShape, AddressBookWebPageShape, AddressBookNameShape, AddressBookAddressShape, AddressBookGroupShape } from "@ldshape/contacts";
const ldoDataset = createLdoDataset();

const example0: AddressBookShape = ldoDataset
  .usingType(AddressBookShapeShapeType)
  .fromSubject("http://example.com/example0");

const example1: AddressBookIndividualShape = ldoDataset
  .usingType(AddressBookIndividualShapeShapeType)
  .fromSubject("http://example.com/example1");

const example2: AddressBookEmailShape = ldoDataset
  .usingType(AddressBookEmailShapeShapeType)
  .fromSubject("http://example.com/example2");

const example3: AddressBookTelephoneShape = ldoDataset
  .usingType(AddressBookTelephoneShapeShapeType)
  .fromSubject("http://example.com/example3");

const example4: AddressBookWebPageShape = ldoDataset
  .usingType(AddressBookWebPageShapeShapeType)
  .fromSubject("http://example.com/example4");

const example5: AddressBookNameShape = ldoDataset
  .usingType(AddressBookNameShapeShapeType)
  .fromSubject("http://example.com/example5");

const example6: AddressBookAddressShape = ldoDataset
  .usingType(AddressBookAddressShapeShapeType)
  .fromSubject("http://example.com/example6");

const example7: AddressBookGroupShape = ldoDataset
  .usingType(AddressBookGroupShapeShapeType)
  .fromSubject("http://example.com/example7");

```

### ShEx Typings

```shex
# Taken and modified from https://github.com/solid/contacts/blob/main/shapes/contacts-shapes.ttl

PREFIX srs: <https://shaperepo.com/schemas/chat#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
PREFIX dc: <http://purl.org/dc/terms/>
PREFIX vcard: <http://www.w3.org/2006/vcard/ns#>

srs:AddressBookShape EXTRA a {
  a [ vcard:AddressBook ] ;
  dc:title xsd:string +;
  vcard:nameEmailIndex xsd:string +;
  vcard:groupIndex IRI ;
  vcard:includesGroup @srs:AddressBookGroupShape *;
  vcard:inAddressBook @srs:AddressBookIndividualShape *;
}

srs:AddressBookIndividualShape EXTRA a {
  a [ vcard:Individual ] ;
  vcard:fn xsd:string +;
  vcard:hasUID IRI ?;
  vcard:hasName @srs:AddressBookNameShape ?;
  vcard:hasPhoto IRI *;
  vcard:hasRelated IRI *;
  vcard:url (IRI OR @srs:AddressBookWebPageShape) *;
  vcard:hasAddress @srs:AddressBookAddressShape *;
  vcard:bday xsd:dateTime ?;
  vcard:anniversary xsd:dateTime ?;
  vcard:hasEmail @srs:AddressBookEmailShape ?;
  vcard:hasTelephone @srs:AddressBookTelephoneShape ?;
  vcard:organization-name xsd:string ?;
  vcard:role xsd:string ?;
  vcard:title xsd:string ?;
  vcard:note xsd:string ?;
  owl:sameAs @srs:AddressBookIndividualShape *;
}

srs:AddressBookEmailShape EXTRA a {
  a [ vcard:Email ];
  vcard:value IRI /^mailto:/ ;
}

srs:AddressBookTelephoneShape EXTRA a {
  a [ vcard:Tel ] ;
  vcard:value IRI /^tel:/ ;
}

srs:AddressBookWebPageShape EXTRA a {
  a [ vcard:WebID ];
  vcard:value IRI /^https?:/ ;
}

srs:AddressBookNameShape EXTRA a {
  vcard:given-name xsd:string ?;
  vcard:family-name xsd:string ?;
  vcard:additional-name xsd:string ?;
  vcard:honorific-prefix xsd:string ?;
  vcard:honorific-suffix xsd:string ?;
}

srs:AddressBookAddressShape EXTRA a {
  vcard:street-address xsd:string ;
  vcard:locality xsd:string ;
  vcard:postal-code xsd:string ;
  vcard:country-name xsd:string ;
}

srs:AddressBookGroupShape EXTRA a {
  a [ vcard:Group ] ;
  vcard:fn xsd:string *;
  vcard:member @srs:AddressBookIndividualShape *;
}


```

### TypeScript Typings

```typescript
import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for contacts
 * =============================================================================
 */

/**
 * AddressBookShape Type
 */
export interface AddressBookShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "AddressBook";
  };
  title: string[];
  nameEmailIndex: string[];
  groupIndex: {
    "@id": string;
  };
  includesGroup?: AddressBookGroupShape[];
  inAddressBook?: AddressBookIndividualShape[];
}

/**
 * AddressBookIndividualShape Type
 */
export interface AddressBookIndividualShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Individual";
  };
  fn: string[];
  hasUID?: {
    "@id": string;
  };
  hasName?: AddressBookNameShape;
  hasPhoto?: {
    "@id": string;
  }[];
  hasRelated?: {
    "@id": string;
  }[];
  url?: (
    | {
        "@id": string;
      }
    | AddressBookWebPageShape
  )[];
  hasAddress?: AddressBookAddressShape[];
  bday?: string;
  anniversary?: string;
  hasEmail?: AddressBookEmailShape;
  hasTelephone?: AddressBookTelephoneShape;
  organizationName?: string;
  role?: string;
  title?: string;
  note?: string;
  sameAs?: AddressBookIndividualShape[];
}

/**
 * AddressBookEmailShape Type
 */
export interface AddressBookEmailShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Email";
  };
  value: {
    "@id": string;
  };
}

/**
 * AddressBookTelephoneShape Type
 */
export interface AddressBookTelephoneShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Tel";
  };
  value: {
    "@id": string;
  };
}

/**
 * AddressBookWebPageShape Type
 */
export interface AddressBookWebPageShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "WebID";
  };
  value: {
    "@id": string;
  };
}

/**
 * AddressBookNameShape Type
 */
export interface AddressBookNameShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  givenName?: string;
  familyName?: string;
  additionalName?: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
}

/**
 * AddressBookAddressShape Type
 */
export interface AddressBookAddressShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  streetAddress: string;
  locality: string;
  postalCode: string;
  countryName: string;
}

/**
 * AddressBookGroupShape Type
 */
export interface AddressBookGroupShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Group";
  };
  fn?: string[];
  member?: AddressBookIndividualShape[];
}

```

