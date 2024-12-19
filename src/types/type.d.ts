interface IHandler {
  device: string;
  endpoints: IEndpoint[];
}

interface IEndpoint {
  name: string;
  device: string;
  channels: number;
  channelsNames: string;
  ip: string;
}

interface IDevice {
  name: string;
  sampleRate: string;
  availableSampleRates: string[];
  bufferSize: string;
  availableBufferSizes: string[];
  inputChannels: string;
  inputChannelNames: string[];
  outputChannels: string;
  outputChannelNames: string[];
}