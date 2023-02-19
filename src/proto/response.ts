/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Identifier } from "./main";

export const protobufPackage = "";

export interface FirstResponse {
  id: Identifier | undefined;
  payload: string;
}

export interface SecondResponse {
  id: Identifier | undefined;
  payload: string[];
}

export interface ThirdResponse {
  id: Identifier | undefined;
  numberOne?: number | undefined;
  numberTwo?: number | undefined;
}

function createBaseFirstResponse(): FirstResponse {
  return { id: undefined, payload: "" };
}

export const FirstResponse = {
  encode(message: FirstResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FirstResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFirstResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FirstResponse {
    return {
      id: isSet(object.id) ? Identifier.fromJSON(object.id) : undefined,
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: FirstResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? Identifier.toJSON(message.id) : undefined);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  create<I extends Exact<DeepPartial<FirstResponse>, I>>(base?: I): FirstResponse {
    return FirstResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FirstResponse>, I>>(object: I): FirstResponse {
    const message = createBaseFirstResponse();
    message.id = (object.id !== undefined && object.id !== null) ? Identifier.fromPartial(object.id) : undefined;
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseSecondResponse(): SecondResponse {
  return { id: undefined, payload: [] };
}

export const SecondResponse = {
  encode(message: SecondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.payload) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SecondResponse {
    return {
      id: isSet(object.id) ? Identifier.fromJSON(object.id) : undefined,
      payload: Array.isArray(object?.payload) ? object.payload.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: SecondResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? Identifier.toJSON(message.id) : undefined);
    if (message.payload) {
      obj.payload = message.payload.map((e) => e);
    } else {
      obj.payload = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SecondResponse>, I>>(base?: I): SecondResponse {
    return SecondResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SecondResponse>, I>>(object: I): SecondResponse {
    const message = createBaseSecondResponse();
    message.id = (object.id !== undefined && object.id !== null) ? Identifier.fromPartial(object.id) : undefined;
    message.payload = object.payload?.map((e) => e) || [];
    return message;
  },
};

function createBaseThirdResponse(): ThirdResponse {
  return { id: undefined, numberOne: undefined, numberTwo: undefined };
}

export const ThirdResponse = {
  encode(message: ThirdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.numberOne !== undefined) {
      writer.uint32(16).uint32(message.numberOne);
    }
    if (message.numberTwo !== undefined) {
      writer.uint32(24).uint32(message.numberTwo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThirdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThirdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.numberOne = reader.uint32();
          break;
        case 3:
          message.numberTwo = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ThirdResponse {
    return {
      id: isSet(object.id) ? Identifier.fromJSON(object.id) : undefined,
      numberOne: isSet(object.numberOne) ? Number(object.numberOne) : undefined,
      numberTwo: isSet(object.numberTwo) ? Number(object.numberTwo) : undefined,
    };
  },

  toJSON(message: ThirdResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? Identifier.toJSON(message.id) : undefined);
    message.numberOne !== undefined && (obj.numberOne = Math.round(message.numberOne));
    message.numberTwo !== undefined && (obj.numberTwo = Math.round(message.numberTwo));
    return obj;
  },

  create<I extends Exact<DeepPartial<ThirdResponse>, I>>(base?: I): ThirdResponse {
    return ThirdResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ThirdResponse>, I>>(object: I): ThirdResponse {
    const message = createBaseThirdResponse();
    message.id = (object.id !== undefined && object.id !== null) ? Identifier.fromPartial(object.id) : undefined;
    message.numberOne = object.numberOne ?? undefined;
    message.numberTwo = object.numberTwo ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
