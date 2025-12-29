import * as anchor from '@coral-xyz/anchor';
import { Program} from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';

import { Votingapp } from '../target/types/votingapp';
import { startAnchor } from 'anchor-bankrun';
import { BankrunProvider } from 'anchor-bankrun';

const IDL = require('../target/idl/votingapp.json');

const votingAddress = new PublicKey("Count3AcZucFDPSFBAeHkQ6AvttieKUkyJ8HiQGhQwe");

describe('votingapp', () => {

  it('Initialize poll', async () => {
    const context = await startAnchor("", [{name: "votingapp", programId: votingAddress }], [])
    const provider = new BankrunProvider(context);

    const votingProgram = new Program<Votingapp>(IDL, provider);

    await votingProgram.methods.initializePoll(
      new anchor.BN(1),
      "What is your favorite type of peanut butter?",
      new anchor.BN(0),
      new anchor.BN(1867037813),
    ).rpc();

  });
});