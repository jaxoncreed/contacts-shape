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
