import { ShapeType } from "@ldo/ldo";
import { contactsSchema } from "./contacts.schema";
import { contactsContext } from "./contacts.context";
import {
  AddressBookShape,
  AddressBookIndividualShape,
  AddressBookEmailShape,
  AddressBookTelephoneShape,
  AddressBookWebPageShape,
  AddressBookNameShape,
  AddressBookAddressShape,
  AddressBookGroupShape,
} from "./contacts.typings";

/**
 * =============================================================================
 * LDO ShapeTypes contacts
 * =============================================================================
 */

/**
 * AddressBookShape ShapeType
 */
export const AddressBookShapeShapeType: ShapeType<AddressBookShape> = {
  schema: contactsSchema,
  shape: "https://shaperepo.com/schemas/chat#AddressBookShape",
  context: contactsContext,
};

/**
 * AddressBookIndividualShape ShapeType
 */
export const AddressBookIndividualShapeShapeType: ShapeType<AddressBookIndividualShape> =
  {
    schema: contactsSchema,
    shape: "https://shaperepo.com/schemas/chat#AddressBookIndividualShape",
    context: contactsContext,
  };

/**
 * AddressBookEmailShape ShapeType
 */
export const AddressBookEmailShapeShapeType: ShapeType<AddressBookEmailShape> =
  {
    schema: contactsSchema,
    shape: "https://shaperepo.com/schemas/chat#AddressBookEmailShape",
    context: contactsContext,
  };

/**
 * AddressBookTelephoneShape ShapeType
 */
export const AddressBookTelephoneShapeShapeType: ShapeType<AddressBookTelephoneShape> =
  {
    schema: contactsSchema,
    shape: "https://shaperepo.com/schemas/chat#AddressBookTelephoneShape",
    context: contactsContext,
  };

/**
 * AddressBookWebPageShape ShapeType
 */
export const AddressBookWebPageShapeShapeType: ShapeType<AddressBookWebPageShape> =
  {
    schema: contactsSchema,
    shape: "https://shaperepo.com/schemas/chat#AddressBookWebPageShape",
    context: contactsContext,
  };

/**
 * AddressBookNameShape ShapeType
 */
export const AddressBookNameShapeShapeType: ShapeType<AddressBookNameShape> = {
  schema: contactsSchema,
  shape: "https://shaperepo.com/schemas/chat#AddressBookNameShape",
  context: contactsContext,
};

/**
 * AddressBookAddressShape ShapeType
 */
export const AddressBookAddressShapeShapeType: ShapeType<AddressBookAddressShape> =
  {
    schema: contactsSchema,
    shape: "https://shaperepo.com/schemas/chat#AddressBookAddressShape",
    context: contactsContext,
  };

/**
 * AddressBookGroupShape ShapeType
 */
export const AddressBookGroupShapeShapeType: ShapeType<AddressBookGroupShape> =
  {
    schema: contactsSchema,
    shape: "https://shaperepo.com/schemas/chat#AddressBookGroupShape",
    context: contactsContext,
  };
