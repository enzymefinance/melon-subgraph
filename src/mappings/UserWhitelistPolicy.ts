import { Address } from '@graphprotocol/graph-ts';
import { Event, Fund, Version } from '../generated/schema';
import { ListRemoval, ListAddition } from '../generated/UserWhitelistPolicyContract';
import { Context } from '../context';

export function handleListAddition(event: ListAddition): void {
  // TODO
}

export function handleListRemoval(event: ListRemoval): void {
  // TODO
}
