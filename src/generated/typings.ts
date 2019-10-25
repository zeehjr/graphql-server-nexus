/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Car: { // root type
    model: string; // String!
  }
  Mutation: {};
  Person: { // root type
    age: number; // Int!
    id: string; // ID!
    name: string; // String!
  }
  Query: {};
  Subscription: {};
  Task: { // root type
    id: string; // ID!
    title: string; // String!
    user_id: string; // ID!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  Car: { // field return type
    model: string; // String!
  }
  Mutation: { // field return type
    addTask: NexusGenRootTypes['Task']; // Task!
  }
  Person: { // field return type
    age: number; // Int!
    id: string; // ID!
    name: string; // String!
    tasks: NexusGenRootTypes['Task'][]; // [Task!]!
  }
  Query: { // field return type
    cars: NexusGenRootTypes['Car'][]; // [Car!]!
    people: NexusGenRootTypes['Person'][]; // [Person!]!
  }
  Subscription: { // field return type
    personChanged: NexusGenRootTypes['Person']; // Person!
  }
  Task: { // field return type
    id: string; // ID!
    title: string; // String!
    user_id: string; // ID!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addTask: { // args
      title?: string | null; // String
      userId?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Car" | "Mutation" | "Person" | "Query" | "Subscription" | "Task";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}