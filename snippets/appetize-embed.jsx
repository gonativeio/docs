<<<<<<< editor
export const AppetizeEmbed = ({ iosEmbedCode, androidEmbedCode, device, scale, osVersion }) => {
  const iosDevice = device?.ios ?? 'iphone17promax';
  const androidDevice = device?.android ?? 'pixel9';
  const iosScale = scale?.ios ?? 63;
  const androidScale = scale?.android ?? 60.5;
  const iosOsVersion = osVersion?.ios ?? '26';
  const androidOsVersion = osVersion?.android ?? '17.0';
=======
export const AppetizeEmbed = ({
  iosEmbedCode,
  androidEmbedCode,
  device,
  scale,
  osVersion,
}) => {
  const iosDevice = device?.ios ?? "iphone17promax";
  const androidDevice = device?.android ?? "pixel9";
  const iosScale = scale?.ios ?? 63;
  const androidScale = scale?.android ?? 60.5;
  const iosOsVersion = osVersion?.ios ?? "26";
  const androidOsVersion = osVersion?.android ?? "17.0";
>>>>>>> git

  const buildUrl = (code, dev, sc, os) =>
    `https://appetize.io/embed/${code}?device=${dev}&scale=${sc}&orientation=portrait&osVersion=${os}&deviceColor=black`;

<<<<<<< editor
  const devices = [
    { label: 'iOS', url: buildUrl(iosEmbedCode, iosDevice, iosScale, iosOsVersion) },
    { label: 'Android', url: buildUrl(androidEmbedCode, androidDevice, androidScale, androidOsVersion) },
  ];

  return (
    <div className="not-prose flex flex-wrap justify-center gap-6 my-6">
      {devices.map(({ label, url }) => (
        <div key={label} className="flex flex-col items-center">
          <iframe
            src={url}
            width="308"
            height="640"
            scrolling="no"
            title={`${label} simulator`}
            style={{ border: 0, paddingTop: '10px' }}
          />
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
=======
  const devices = [
    {
      label: "iOS",
      url: buildUrl(iosEmbedCode, iosDevice, iosScale, iosOsVersion),
    },
    {
      label: "Android",
      url: buildUrl(
        androidEmbedCode,
        androidDevice,
        androidScale,
        androidOsVersion,
      ),
    },
  ];

  return (
    <div className="not-prose flex flex-wrap justify-center gap-6 my-6">
      {devices.map(({ label, url }) => (
        <div key={label} className="flex flex-col items-center">
          <iframe
            src={url}
            width="308"
            height="640"
            scrolling="no"
            title={`${label} simulator`}
            style={{ border: 0, paddingTop: "10px" }}
          />
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

>>>>>>> git