import { useEffect, useState } from 'react';

function useWebSocket(endpointIp: string) {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const replaceEndPointIP = endpointIp ? endpointIp.replace(/\./g, '_') : ""
    const ws = new WebSocket(`ws://192.168.0.203:8080/${replaceEndPointIP}`);

    ws.onmessage = (event) => {
      const data = event.data;
      const levelValues = data
        .split(';')
        .filter(Boolean)
        .map((level: string) => parseFloat(level));
      setLevels(levelValues);
    };

    return () => {
      ws.close();
    };
  }, [endpointIp]);

  return levels;
}

export default useWebSocket;