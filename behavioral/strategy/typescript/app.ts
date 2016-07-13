import {Instrument} from './Instrument';

import {Acardion} from './play-behaviors/Acardion';
import {Piano} from './play-behaviors/Piano';
import {Dram} from './play-behaviors/Dram';

var instrument = new Instrument(new Acardion);
instrument.play();

var instrument = new Instrument(new Piano);
instrument.play();

var instrument = new Instrument(new Dram);
instrument.play();
