import { Address, dataSource } from '@graphprotocol/graph-ts';
import { Event, Fund, Version } from '../generated/schema';
import { Context } from '../context';
import { createFundEvent } from '../entities/Event';
import { createFund } from '../entities/Fund';
import { ensureManager } from '../entities/Account';
import { NewFund } from '../generated/VersionContract';

export function handleNewFund(event: NewFund): void {
  let context = new Context(dataSource.context(), event);
  context.hub = event.params.hub.toHex();

  let routes = event.params.routes as Address[];
  context.accounting = routes[0].toHex();
  context.fees = routes[1].toHex();
  context.participation = routes[2].toHex();
  context.policies = routes[3].toHex();
  context.shares = routes[4].toHex();
  context.trading = routes[5].toHex();

  let manager = ensureManager(event.params.manager);
  context.entities.manager = manager;

  createFund(event.params.hub, context);
  createFundEvent('NewFund', context);
}
