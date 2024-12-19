import { Button } from "../ui/button"
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useState } from "react"

const FAKEDATA = [
  {
    "name": "ASIO4ALL v2",
    "sampleRate": "44100",
    "availableSampleRates": [
      "8000",
      "16000",
      "44100"
    ],
    "bufferSize": "640",
    "availableBufferSizes": [
      "64",
      "80",
      "96",
      "112",
      "128",
      "144",
      "160",
      "176",
      "192",
      "208",
      "224",
      "240",
      "256",
      "272",
      "288",
      "304",
      "320",
      "336",
      "352",
      "368",
      "384",
      "400",
      "416",
      "432",
      "448",
      "464",
      "480",
      "496",
      "512",
      "528",
      "544",
      "560",
      "576",
      "592",
      "608",
      "624",
      "640",
      "656",
      "672",
      "688",
      "704",
      "720",
      "736",
      "752",
      "768",
      "784",
      "800",
      "816",
      "832",
      "848",
      "864",
      "880",
      "896",
      "912",
      "928",
      "944",
      "960",
      "976",
      "992",
      "1008",
      "1024",
      "1040",
      "1056",
      "1072",
      "1088",
      "1104",
      "1120",
      "1136",
      "1152",
      "1168",
      "1184",
      "1200",
      "1216",
      "1232",
      "1248",
      "1264",
      "1280",
      "1296",
      "1312",
      "1328",
      "1344",
      "1360",
      "1376",
      "1392",
      "1408",
      "1424",
      "1440",
      "1456",
      "1472",
      "1488",
      "1504",
      "1520",
      "1536",
      "1552",
      "1568",
      "1584",
      "1600",
      "1616",
      "1632",
      "1648",
      "1664",
      "1680",
      "1696",
      "1712",
      "1728",
      "1744",
      "1760",
      "1776",
      "1792",
      "1808",
      "1824",
      "1840",
      "1856",
      "1872",
      "1888",
      "1904",
      "1920",
      "1936",
      "1952",
      "1968",
      "1984",
      "2000",
      "2016",
      "2032",
      "2048"
    ],
    "inputChannels": "6",
    "inputChannelNames": [
      "DroidCam Audio 1",
      "DroidCam Audio 2",
      "fifine Headset 1",
      "fifine Headset 2",
      "Iriun Webcam Audio 1",
      "Iriun Webcam Audio 2"
    ],
    "outputChannels": "2",
    "outputChannelNames": [
      "ACX HD Audio Speaker 1",
      "ACX HD Audio Speaker 2"
    ]
  }
]

export const DialogEditHandler = () => {
  // const { data, isLoading } = useDevices()

  const { bufferSize: bufferSizeData, sampleRate: sampleRateData, availableBufferSizes, availableSampleRates } = FAKEDATA[0]

  const [sampleRate, setSampleRate] = useState(sampleRateData)
  const [bufferSize, setBufferSize] = useState(bufferSizeData)

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Gerenciar interface de áudio</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-2">
        <Label>
          Nome
        </Label>
        <Input
          disabled
          defaultValue="ASIO4ALL v2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>
          Alias
        </Label>
        <Input
          placeholder="Placa #01"
          defaultValue=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>
          SampleRate
        </Label>
        <Select onValueChange={(value) => setSampleRate(value)} defaultValue={sampleRate}>
          <SelectTrigger>
            <SelectValue placeholder="Informe o SampleRate" defaultValue={sampleRate} />
          </SelectTrigger>
          <SelectContent>
            {
              availableSampleRates.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>{item}</SelectItem>
                )
              })
            }
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>
          BufferSize
        </Label>
        <Select onValueChange={(value) => setBufferSize(value)} defaultValue={bufferSize}>
          <SelectTrigger>
            <SelectValue placeholder="Informe o BufferSize" defaultValue={bufferSize} />
          </SelectTrigger>
          <SelectContent>
            {
              availableBufferSizes.map((item, index) => {
                return (
                  <SelectItem key={index} value={item}>{item}</SelectItem>
                )
              })
            }
          </SelectContent>
        </Select>
      </div>
      <DialogFooter className="sm:justify-between">
        <DialogClose asChild>
          <Button size={'default'} type="button" variant="outline">
            Fechar
          </Button>
        </DialogClose>
        <Button size={'default'} type="button" variant="default">
          Editar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}