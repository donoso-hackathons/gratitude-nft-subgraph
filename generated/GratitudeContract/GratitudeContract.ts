// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class GratitudTokenAceptedEvent extends ethereum.Event {
  get params(): GratitudTokenAceptedEvent__Params {
    return new GratitudTokenAceptedEvent__Params(this);
  }
}

export class GratitudTokenAceptedEvent__Params {
  _event: GratitudTokenAceptedEvent;

  constructor(event: GratitudTokenAceptedEvent) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get status(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get lat(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get lng(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GratitudTokenChangeStatusEvent extends ethereum.Event {
  get params(): GratitudTokenChangeStatusEvent__Params {
    return new GratitudTokenChangeStatusEvent__Params(this);
  }
}

export class GratitudTokenChangeStatusEvent__Params {
  _event: GratitudTokenChangeStatusEvent;

  constructor(event: GratitudTokenChangeStatusEvent) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get status(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class GratitudeCampaignCreatedEvent extends ethereum.Event {
  get params(): GratitudeCampaignCreatedEvent__Params {
    return new GratitudeCampaignCreatedEvent__Params(this);
  }
}

export class GratitudeCampaignCreatedEvent__Params {
  _event: GratitudeCampaignCreatedEvent;

  constructor(event: GratitudeCampaignCreatedEvent) {
    this._event = event;
  }

  get campaignId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get status(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get campaignUri(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class GratitudeCampaignRejected extends ethereum.Event {
  get params(): GratitudeCampaignRejected__Params {
    return new GratitudeCampaignRejected__Params(this);
  }
}

export class GratitudeCampaignRejected__Params {
  _event: GratitudeCampaignRejected;

  constructor(event: GratitudeCampaignRejected) {
    this._event = event;
  }

  get campaignId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GratitudeCampaignVerified extends ethereum.Event {
  get params(): GratitudeCampaignVerified__Params {
    return new GratitudeCampaignVerified__Params(this);
  }
}

export class GratitudeCampaignVerified__Params {
  _event: GratitudeCampaignVerified;

  constructor(event: GratitudeCampaignVerified) {
    this._event = event;
  }

  get campaignId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GratitudeTokenCreationEvent extends ethereum.Event {
  get params(): GratitudeTokenCreationEvent__Params {
    return new GratitudeTokenCreationEvent__Params(this);
  }
}

export class GratitudeTokenCreationEvent__Params {
  _event: GratitudeTokenCreationEvent;

  constructor(event: GratitudeTokenCreationEvent) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get status(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get lat(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get lng(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get tokenUri(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GratitudeContract__getCreatorTokensResultValue0Struct extends ethereum.Tuple {
  get receiver(): Address {
    return this[0].toAddress();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get status(): i32 {
    return this[2].toI32();
  }

  get geo(): GratitudeContract__getCreatorTokensResultValue0GeoStruct {
    return changetype<GratitudeContract__getCreatorTokensResultValue0GeoStruct>(
      this[3].toTuple()
    );
  }

  get timeStamp(): BigInt {
    return this[4].toBigInt();
  }

  get tokenUri(): string {
    return this[5].toString();
  }

  get linkCode(): Bytes {
    return this[6].toBytes();
  }
}

export class GratitudeContract__getCreatorTokensResultValue0GeoStruct extends ethereum.Tuple {
  get lat(): i32 {
    return this[0].toI32();
  }

  get lng(): i32 {
    return this[1].toI32();
  }
}

export class GratitudeContract__getGratitudeNFtByLinkCodeResultValue0Struct extends ethereum.Tuple {
  get receiver(): Address {
    return this[0].toAddress();
  }

  get tokenId(): BigInt {
    return this[1].toBigInt();
  }

  get status(): i32 {
    return this[2].toI32();
  }

  get geo(): GratitudeContract__getGratitudeNFtByLinkCodeResultValue0GeoStruct {
    return changetype<
      GratitudeContract__getGratitudeNFtByLinkCodeResultValue0GeoStruct
    >(this[3].toTuple());
  }

  get timeStamp(): BigInt {
    return this[4].toBigInt();
  }

  get tokenUri(): string {
    return this[5].toString();
  }

  get linkCode(): Bytes {
    return this[6].toBytes();
  }
}

export class GratitudeContract__getGratitudeNFtByLinkCodeResultValue0GeoStruct extends ethereum.Tuple {
  get lat(): i32 {
    return this[0].toI32();
  }

  get lng(): i32 {
    return this[1].toI32();
  }
}

export class GratitudeContract extends ethereum.SmartContract {
  static bind(address: Address): GratitudeContract {
    return new GratitudeContract("GratitudeContract", address);
  }

  _campaignIds(): BigInt {
    let result = super.call("_campaignIds", "_campaignIds():(uint256)", []);

    return result[0].toBigInt();
  }

  try__campaignIds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_campaignIds", "_campaignIds():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _tokenIds(): BigInt {
    let result = super.call("_tokenIds", "_tokenIds():(uint256)", []);

    return result[0].toBigInt();
  }

  try__tokenIds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_tokenIds", "_tokenIds():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCampaignStatus(_campaignId: BigInt): i32 {
    let result = super.call(
      "getCampaignStatus",
      "getCampaignStatus(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(_campaignId)]
    );

    return result[0].toI32();
  }

  try_getCampaignStatus(_campaignId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getCampaignStatus",
      "getCampaignStatus(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(_campaignId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getCreatorTokens(): Array<
    GratitudeContract__getCreatorTokensResultValue0Struct
  > {
    let result = super.call(
      "getCreatorTokens",
      "getCreatorTokens():((address,uint256,uint8,(uint16,uint16),uint256,string,bytes32)[])",
      []
    );

    return result[0].toTupleArray<
      GratitudeContract__getCreatorTokensResultValue0Struct
    >();
  }

  try_getCreatorTokens(): ethereum.CallResult<
    Array<GratitudeContract__getCreatorTokensResultValue0Struct>
  > {
    let result = super.tryCall(
      "getCreatorTokens",
      "getCreatorTokens():((address,uint256,uint8,(uint16,uint16),uint256,string,bytes32)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        GratitudeContract__getCreatorTokensResultValue0Struct
      >()
    );
  }

  getGratitudeNFtByLinkCode(
    _linkCode: string
  ): GratitudeContract__getGratitudeNFtByLinkCodeResultValue0Struct {
    let result = super.call(
      "getGratitudeNFtByLinkCode",
      "getGratitudeNFtByLinkCode(string):((address,uint256,uint8,(uint16,uint16),uint256,string,bytes32))",
      [ethereum.Value.fromString(_linkCode)]
    );

    return changetype<
      GratitudeContract__getGratitudeNFtByLinkCodeResultValue0Struct
    >(result[0].toTuple());
  }

  try_getGratitudeNFtByLinkCode(
    _linkCode: string
  ): ethereum.CallResult<
    GratitudeContract__getGratitudeNFtByLinkCodeResultValue0Struct
  > {
    let result = super.tryCall(
      "getGratitudeNFtByLinkCode",
      "getGratitudeNFtByLinkCode(string):((address,uint256,uint8,(uint16,uint16),uint256,string,bytes32))",
      [ethereum.Value.fromString(_linkCode)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<
        GratitudeContract__getGratitudeNFtByLinkCodeResultValue0Struct
      >(value[0].toTuple())
    );
  }

  getStatus(_tokenId: BigInt): i32 {
    let result = super.call("getStatus", "getStatus(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toI32();
  }

  try_getStatus(_tokenId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall("getStatus", "getStatus(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptLinkHashCall extends ethereum.Call {
  get inputs(): AcceptLinkHashCall__Inputs {
    return new AcceptLinkHashCall__Inputs(this);
  }

  get outputs(): AcceptLinkHashCall__Outputs {
    return new AcceptLinkHashCall__Outputs(this);
  }
}

export class AcceptLinkHashCall__Inputs {
  _call: AcceptLinkHashCall;

  constructor(call: AcceptLinkHashCall) {
    this._call = call;
  }

  get _linkCode(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _geo(): AcceptLinkHashCall_geoStruct {
    return changetype<AcceptLinkHashCall_geoStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class AcceptLinkHashCall__Outputs {
  _call: AcceptLinkHashCall;

  constructor(call: AcceptLinkHashCall) {
    this._call = call;
  }
}

export class AcceptLinkHashCall_geoStruct extends ethereum.Tuple {
  get lat(): i32 {
    return this[0].toI32();
  }

  get lng(): i32 {
    return this[1].toI32();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ApproveCampaignCall extends ethereum.Call {
  get inputs(): ApproveCampaignCall__Inputs {
    return new ApproveCampaignCall__Inputs(this);
  }

  get outputs(): ApproveCampaignCall__Outputs {
    return new ApproveCampaignCall__Outputs(this);
  }
}

export class ApproveCampaignCall__Inputs {
  _call: ApproveCampaignCall;

  constructor(call: ApproveCampaignCall) {
    this._call = call;
  }

  get _campaignId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ApproveCampaignCall__Outputs {
  _call: ApproveCampaignCall;

  constructor(call: ApproveCampaignCall) {
    this._call = call;
  }
}

export class CancelWhenStillPendingCall extends ethereum.Call {
  get inputs(): CancelWhenStillPendingCall__Inputs {
    return new CancelWhenStillPendingCall__Inputs(this);
  }

  get outputs(): CancelWhenStillPendingCall__Outputs {
    return new CancelWhenStillPendingCall__Outputs(this);
  }
}

export class CancelWhenStillPendingCall__Inputs {
  _call: CancelWhenStillPendingCall;

  constructor(call: CancelWhenStillPendingCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelWhenStillPendingCall__Outputs {
  _call: CancelWhenStillPendingCall;

  constructor(call: CancelWhenStillPendingCall) {
    this._call = call;
  }
}

export class CheckPendingStatusPriorToGetCall extends ethereum.Call {
  get inputs(): CheckPendingStatusPriorToGetCall__Inputs {
    return new CheckPendingStatusPriorToGetCall__Inputs(this);
  }

  get outputs(): CheckPendingStatusPriorToGetCall__Outputs {
    return new CheckPendingStatusPriorToGetCall__Outputs(this);
  }
}

export class CheckPendingStatusPriorToGetCall__Inputs {
  _call: CheckPendingStatusPriorToGetCall;

  constructor(call: CheckPendingStatusPriorToGetCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CheckPendingStatusPriorToGetCall__Outputs {
  _call: CheckPendingStatusPriorToGetCall;

  constructor(call: CheckPendingStatusPriorToGetCall) {
    this._call = call;
  }
}

export class CreateCampaignCall extends ethereum.Call {
  get inputs(): CreateCampaignCall__Inputs {
    return new CreateCampaignCall__Inputs(this);
  }

  get outputs(): CreateCampaignCall__Outputs {
    return new CreateCampaignCall__Outputs(this);
  }
}

export class CreateCampaignCall__Inputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }

  get _campaignUri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class CreateCampaignCall__Outputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }
}

export class CreateGratitudeTokenCall extends ethereum.Call {
  get inputs(): CreateGratitudeTokenCall__Inputs {
    return new CreateGratitudeTokenCall__Inputs(this);
  }

  get outputs(): CreateGratitudeTokenCall__Outputs {
    return new CreateGratitudeTokenCall__Outputs(this);
  }
}

export class CreateGratitudeTokenCall__Inputs {
  _call: CreateGratitudeTokenCall;

  constructor(call: CreateGratitudeTokenCall) {
    this._call = call;
  }

  get _status(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _geo(): CreateGratitudeTokenCall_geoStruct {
    return changetype<CreateGratitudeTokenCall_geoStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }

  get _timeStamp(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _tokenUri(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _linkCode(): string {
    return this._call.inputValues[5].value.toString();
  }
}

export class CreateGratitudeTokenCall__Outputs {
  _call: CreateGratitudeTokenCall;

  constructor(call: CreateGratitudeTokenCall) {
    this._call = call;
  }
}

export class CreateGratitudeTokenCall_geoStruct extends ethereum.Tuple {
  get lat(): i32 {
    return this[0].toI32();
  }

  get lng(): i32 {
    return this[1].toI32();
  }
}

export class RejectCampaignCall extends ethereum.Call {
  get inputs(): RejectCampaignCall__Inputs {
    return new RejectCampaignCall__Inputs(this);
  }

  get outputs(): RejectCampaignCall__Outputs {
    return new RejectCampaignCall__Outputs(this);
  }
}

export class RejectCampaignCall__Inputs {
  _call: RejectCampaignCall;

  constructor(call: RejectCampaignCall) {
    this._call = call;
  }

  get _campaignId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RejectCampaignCall__Outputs {
  _call: RejectCampaignCall;

  constructor(call: RejectCampaignCall) {
    this._call = call;
  }
}

export class RejectGratitudeNFTbyLinkCodeCall extends ethereum.Call {
  get inputs(): RejectGratitudeNFTbyLinkCodeCall__Inputs {
    return new RejectGratitudeNFTbyLinkCodeCall__Inputs(this);
  }

  get outputs(): RejectGratitudeNFTbyLinkCodeCall__Outputs {
    return new RejectGratitudeNFTbyLinkCodeCall__Outputs(this);
  }
}

export class RejectGratitudeNFTbyLinkCodeCall__Inputs {
  _call: RejectGratitudeNFTbyLinkCodeCall;

  constructor(call: RejectGratitudeNFTbyLinkCodeCall) {
    this._call = call;
  }

  get _linkCode(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class RejectGratitudeNFTbyLinkCodeCall__Outputs {
  _call: RejectGratitudeNFTbyLinkCodeCall;

  constructor(call: RejectGratitudeNFTbyLinkCodeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class ResendWhenTimeOutOrRejectedOrStandbyCall extends ethereum.Call {
  get inputs(): ResendWhenTimeOutOrRejectedOrStandbyCall__Inputs {
    return new ResendWhenTimeOutOrRejectedOrStandbyCall__Inputs(this);
  }

  get outputs(): ResendWhenTimeOutOrRejectedOrStandbyCall__Outputs {
    return new ResendWhenTimeOutOrRejectedOrStandbyCall__Outputs(this);
  }
}

export class ResendWhenTimeOutOrRejectedOrStandbyCall__Inputs {
  _call: ResendWhenTimeOutOrRejectedOrStandbyCall;

  constructor(call: ResendWhenTimeOutOrRejectedOrStandbyCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _linkCode(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ResendWhenTimeOutOrRejectedOrStandbyCall__Outputs {
  _call: ResendWhenTimeOutOrRejectedOrStandbyCall;

  constructor(call: ResendWhenTimeOutOrRejectedOrStandbyCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
