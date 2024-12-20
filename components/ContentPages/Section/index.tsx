interface TextLink {
  text: string;
  href: string;
}

interface ContentItem {
  subtitle: string;
  text?: string;
  textLink?: TextLink;
  bullets?: string[];
}

interface ContentSectionProps {
  id: string;
  title: string;
  content: ContentItem[];
}

export function ContentSection({ id, title, content }: ContentSectionProps) {
  return (
    <div id={id} className="space-y-2">
      <h2 className="text-xl font-semibold dark:text-white text-[#151515]">
        {title}
      </h2>
      <div className="pl-4">
        {content.map((item, index) => (
          <div key={index} className="space-y-2">
            <p className="dark:text-gray-400 text-[#151515]">
              {item.subtitle && <strong>{item.subtitle}</strong>}
              {item.text && item.text}
              {item.textLink && (
                <a href={item.textLink.href} className="text-blue-400 hover:text-blue-500 ml-1">
                  {item.textLink.text}
                </a>
              )}
            </p>
            {item.bullets && (
              <ul className="list-disc pl-6">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="dark:text-gray-400 text-[#151515]">{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}