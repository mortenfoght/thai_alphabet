import { LobbyCard } from "./Lobby";
import { thailandCategories, categoryViewId } from "./thailandContent";

// Long-form overview page and hub for the "About Thailand" section. Prose plus
// a quick-facts table (each claim keeps its source as an inline citation link),
// followed by a category grid that links out to the 27 deep-dive articles.

// Small helper: an external citation link that opens in a new tab safely.
function Src({ href, children })
{
	return (
		<a className="article-src" href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
}

const facts = [
	{
		label: "Official name",
		value: (
			<>
				Kingdom of Thailand (Ratcha Anachak Thai){" "}
				(<Src href="https://www.britannica.com/place/Thailand">Britannica</Src>)
			</>
		),
	},
	{
		label: "Capital",
		value: (
			<>
				Bangkok — metro area population roughly 17.4 million{" "}
				(<Src href="https://www.q-files.com/geography/asia/thailand/print">Q-files</Src>)
			</>
		),
	},
	{
		label: "Area",
		value: (
			<>
				513,120 sq km (198,120 sq mi) — the 50th-largest country in the world,
				slightly more than twice the size of Wyoming{" "}
				(<Src href="https://en.wikipedia.org/wiki/Thailand">Wikipedia</Src>;{" "}
				<Src href="https://www.cia.gov/the-world-factbook/about/archives/2021/countries/thailand/">
					CIA World Factbook archive
				</Src>)
			</>
		),
	},
	{
		label: "Population",
		value: (
			<>
				Around 66 million registered Thai nationals{" "}
				(<Src href="https://en.wikipedia.org/wiki/Thailand">Wikipedia</Src>), or
				about 71.6 million total residents including foreign nationals per World
				Bank estimates{" "}
				(<Src href="https://data.worldbank.org/country/thailand">World Bank</Src>)
			</>
		),
	},
	{
		label: "Official language",
		value: (
			<>
				Thai{" "}
				(<Src href="https://www.britannica.com/place/Thailand">Britannica</Src>)
			</>
		),
	},
	{
		label: "Currency",
		value: (
			<>
				Thai baht (THB){" "}
				(<Src href="https://www.britannica.com/place/Thailand">Britannica</Src>)
			</>
		),
	},
	{
		label: "Government",
		value: (
			<>
				Unitary parliamentary constitutional monarchy{" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>)
			</>
		),
	},
	{
		label: "Head of state",
		value: (
			<>
				King Maha Vajiralongkorn (Rama X){" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>)
			</>
		),
	},
	{
		label: "Head of government",
		value: (
			<>
				Prime Minister Anutin Charnvirakul{" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>;{" "}
				<Src href="https://english.news.cn/asiapacific/20260320/688a2ed7bdf64f228a5dd877dc8c8bf0/c.html">
					Xinhua
				</Src>)
			</>
		),
	},
	{
		label: "GDP (nominal)",
		value: (
			<>
				Approximately US$577 billion (2025){" "}
				(<Src href="https://data.worldbank.org/country/thailand">World Bank</Src>)
			</>
		),
	},
	{
		label: "GDP per capita",
		value: (
			<>
				Approximately US$8,057 (2025){" "}
				(<Src href="https://data.worldbank.org/country/thailand">World Bank</Src>)
			</>
		),
	},
	{
		label: "Major religion",
		value: (
			<>
				Buddhism (Theravada), roughly 93–94% of the population{" "}
				(<Src href="https://www.q-files.com/geography/asia/thailand/print">Q-files</Src>)
			</>
		),
	},
];

function AboutThailand({ onNavigate })
{
	return (
		<article className="article">
			<h2 className="article-title">About Thailand</h2>
			<p className="article-lead">
				Thailand, officially the Kingdom of Thailand and known as Siam until
				1939, sits at the heart of mainland Southeast Asia. It is the only
				country in the region never colonized by a European power, a fact that
				still shapes its national identity and politics today{" "}
				(<Src href="https://www.cia.gov/the-world-factbook/about/archives/2022/countries/thailand/summaries">
					CIA World Factbook archive
				</Src>). This overview covers the country's geography, history, political
				system, and economy at a high level — and each opens into a set of
				deep-dive articles, linked below.
			</p>

			<h3 className="article-heading">Quick Facts</h3>
			<div className="table-scroll">
				<table className="facts-table">
					<tbody>
						{facts.map((f) => (
							<tr key={f.label}>
								<th scope="row">{f.label}</th>
								<td>{f.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<p className="article-note">
				A note on population figures: Thailand's numbers vary noticeably by
				source because official Thai civil registration counts only Thai
				nationals (around 66 million), while World Bank and UN estimates of
				total residents — which include several million migrant workers, mostly
				from Myanmar, Laos, and Cambodia — run closer to 71–72 million{" "}
				(<Src href="https://en.wikipedia.org/wiki/Thailand">Wikipedia</Src>;{" "}
				<Src href="https://data.worldbank.org/country/thailand">World Bank</Src>).
			</p>

			<h3 className="article-heading">Geography</h3>
			<p>
				Thailand occupies a distinctive shape often compared to an elephant's
				head, stretching from the mountainous north down through a narrow
				peninsula in the south. It borders Myanmar to the west and northwest,
				Laos to the east and northeast, Cambodia to the southeast, and Malaysia
				to the south, with coastlines on both the Gulf of Thailand and the
				Andaman Sea{" "}
				(<Src href="https://en.wikipedia.org/wiki/Thailand">Wikipedia</Src>). The
				country covers roughly 513,120 square kilometers, making it the
				50th-largest nation on Earth{" "}
				(<Src href="https://www.cia.gov/the-world-factbook/about/archives/2021/countries/thailand/">
					CIA World Factbook archive
				</Src>).
			</p>
			<p>
				The terrain splits into four broad regions. The <strong>north</strong>{" "}
				consists of forested highlands and mountains, home to Doi Inthanon —
				Thailand's highest point at 2,565 meters — and the country's second
				city, Chiang Mai. The <strong>northeast</strong>, known as Isan, sits on
				the Khorat Plateau, a relatively dry region bordered by the Mekong River.
				The <strong>central plain</strong> is dominated by the fertile Chao
				Phraya River valley, the agricultural and demographic heartland that
				flows down into the Gulf of Thailand and past Bangkok. The{" "}
				<strong>south</strong> narrows into the Kra Isthmus before widening into
				the Malay Peninsula, fringed by the beaches and islands of the Andaman
				Sea and Gulf coasts{" "}
				(<Src href="https://en.wikipedia.org/wiki/Thailand">Wikipedia</Src>;{" "}
				<Src href="https://www.q-files.com/geography/asia/thailand/print">Q-files</Src>).
			</p>
			<p>
				Thailand's climate is tropical, governed by two monsoon seasons: a warm,
				rainy southwest monsoon from mid-May to September, and a cooler, drier
				northeast monsoon from November to mid-March, while the southern isthmus
				stays hot and humid year-round{" "}
				(<Src href="https://www.cia.gov/the-world-factbook/about/archives/2021/countries/thailand/">
					CIA World Factbook archive
				</Src>). Natural resources include tin, rubber, natural gas, tungsten,
				timber, and fish, and roughly 41% of land is used for agriculture while
				about 37% remains forested{" "}
				(<Src href="https://www.cia.gov/the-world-factbook/about/archives/2021/countries/thailand/">
					CIA World Factbook archive
				</Src>).
			</p>

			<h3 className="article-heading">History</h3>
			<p>
				Thailand's recorded history begins with the kingdom of{" "}
				<strong>Sukhothai</strong>, founded around 1238 CE, traditionally
				credited with developing the Thai script under King Ramkhamhaeng.
				Sukhothai gradually gave way to the more powerful{" "}
				<strong>Ayutthaya Kingdom</strong>, founded in 1351, which grew into one
				of the great trading cities of Asia — by some estimates the largest city
				in the world around 1700 — and maintained relations with European powers,
				China, and its neighbors for over four centuries{" "}
				(<Src href="https://en.wikipedia.org/wiki/History_of_Thailand">
					Wikipedia — History of Thailand
				</Src>).
			</p>
			<p>
				Ayutthaya fell to Burmese invasion in 1767, but the general{" "}
				<strong>Taksin</strong> rapidly rebuilt a Siamese state at Thonburi. In
				1782, Taksin was succeeded by <strong>Rama I</strong>, founder of the{" "}
				<strong>Chakri dynasty</strong>, who established the new capital at
				Bangkok — a dynasty that still reigns today{" "}
				(<Src href="https://en.wikipedia.org/wiki/History_of_Thailand">
					Wikipedia — History of Thailand
				</Src>). During the colonial scramble of the 19th century, Kings{" "}
				<strong>Mongkut (Rama IV)</strong> and{" "}
				<strong>Chulalongkorn (Rama V)</strong> modernized the kingdom's
				administration, legal system, and military, and skillfully used diplomacy
				— including ceding some peripheral territories to British and French
				colonial powers — to keep Siam as the only Southeast Asian nation never
				formally colonized{" "}
				(<Src href="https://en.wikipedia.org/wiki/History_of_Thailand">
					Wikipedia — History of Thailand
				</Src>).
			</p>
			<p>
				A bloodless coup in <strong>1932</strong>, led by a group of military
				officers and civil servants called Khana Ratsadon, ended nearly 150 years
				of absolute monarchy and installed a constitutional monarchy — the
				political framework that, in modified form, still governs the country{" "}
				(<Src href="https://en.wikipedia.org/wiki/History_of_Thailand">
					Wikipedia — History of Thailand
				</Src>). The country was renamed from <strong>Siam to Thailand</strong> in
				1939 under nationalist military leader Phibunsongkhram. During World War
				II, Thailand allied with Japan, then realigned with the United States
				during the Cold War, becoming a key Southeast Asian bulwark against
				communism and a staging ground for US operations during the Vietnam War{" "}
				(<Src href="https://en.wikipedia.org/wiki/History_of_Thailand">
					Wikipedia — History of Thailand
				</Src>).
			</p>
			<p>
				The following decades were marked by a recurring cycle of elected
				governments and military coups — Thailand has had roughly 20
				constitutions since 1932, among the highest counts of any modern state{" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>). Notable modern turning points include the pro-democracy uprisings
				of 1973 and 1992; the rise and 2006 ouster of populist Prime Minister{" "}
				<strong>Thaksin Shinawatra</strong>; the 2014 coup that brought General{" "}
				<strong>Prayut Chan-o-cha</strong> to power; the death of the
				long-reigning King <strong>Bhumibol Adulyadej</strong> in 2016 and the
				succession of his son, <strong>King Vajiralongkorn</strong>; and a 2023
				election won by reformist and populist parties that eventually produced a
				Pheu Thai-led coalition government{" "}
				(<Src href="https://en.wikipedia.org/wiki/History_of_Thailand">
					Wikipedia — History of Thailand
				</Src>).
			</p>
			<p>
				Political turbulence has continued into the mid-2020s: Thailand legalized
				same-sex marriage in January 2025, becoming the first Southeast Asian
				country to do so, while a leaked diplomatic phone call amid a
				Thai-Cambodian border dispute triggered a constitutional crisis that
				removed Prime Minister <strong>Paetongtarn Shinawatra</strong> from office
				later that year. <strong>Anutin Charnvirakul</strong> became the 32nd
				Prime Minister in September 2025 and secured a second term in March 2026
				with royal endorsement from King Vajiralongkorn{" "}
				(<Src href="https://en.wikipedia.org/wiki/History_of_Thailand">
					Wikipedia — History of Thailand
				</Src>;{" "}
				<Src href="https://english.news.cn/asiapacific/20260320/688a2ed7bdf64f228a5dd877dc8c8bf0/c.html">
					Xinhua
				</Src>).
			</p>

			<h3 className="article-heading">Political System</h3>
			<p>
				Thailand is a{" "}
				<strong>unitary parliamentary constitutional monarchy</strong>. The King
				serves as head of state and the symbolic unifying figure of the nation,
				exercising formal authority through the National Assembly, the Council of
				Ministers, and the courts, but holding little direct governing power
				under the current 2017 constitution{" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>).
			</p>
			<p>
				Executive power rests with the <strong>Prime Minister</strong>, elected
				by the bicameral National Assembly and formally appointed by the King,
				who then leads a Cabinet — the Council of Ministers — spanning 20
				ministries{" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>). The legislature, the <strong>National Assembly</strong>, consists
				of a 500-member <strong>House of Representatives</strong> (350 members
				elected from constituencies, 150 from party lists, serving four-year
				terms) and a 250-member <strong>Senate</strong> elected through an
				indirect, professional-group-based selection process for five-year terms{" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>). The judiciary — comprising the Supreme Court, the Supreme
				Administrative Court, and the Constitutional Court — operates
				independently of the executive and legislature and has played an outsized
				role in Thai politics, including removing sitting prime ministers and
				dissolving political parties{" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>).
			</p>
			<p>
				Thai party politics has long been shaped by a rivalry between populist
				parties associated with the Shinawatra family (Thai Rak Thai, then Pheu
				Thai) and royalist-military-aligned establishment parties and factions,
				punctuated by mass street movements such as the Red Shirts, Yellow
				Shirts, and pro-democracy youth protests of 2020–2021{" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>). The Economist Intelligence Unit classified Thailand as a "flawed
				democracy" in its 2023 index, while the V-Dem Democracy Indices have
				described it as an "electoral autocracy," reflecting how deeply the
				military and unelected institutions remain embedded in the political
				system even under civilian governments{" "}
				(<Src href="https://en.wikipedia.org/wiki/Politics_of_Thailand">
					Wikipedia — Politics of Thailand
				</Src>).
			</p>

			<h3 className="article-heading">Economy</h3>
			<p>
				Thailand runs a{" "}
				<strong>developing, export-oriented mixed economy</strong> and ranks as
				the second-largest economy in Southeast Asia after Indonesia, with a
				nominal GDP of roughly US$577 billion and GDP per capita near US$8,057 in
				2025{" "}
				(<Src href="https://data.worldbank.org/country/thailand">World Bank</Src>;{" "}
				<Src href="https://en.wikipedia.org/wiki/Economy_of_Thailand">
					Wikipedia — Economy of Thailand
				</Src>). The country transformed from a largely agricultural economy into
				a newly industrialized one, growing at an extraordinary average of 7.5%
				per year during the 1960–1996 boom before the 1997 Asian Financial Crisis
				forced a painful adjustment; growth since has settled into a more
				moderate 2–5% range{" "}
				(<Src href="https://www.worldbank.org/ext/en/country/thailand">
					World Bank
				</Src>).
			</p>
			<p>
				Industry and services now dominate output: manufacturing and industry
				contribute around 39% of GDP, services (including finance, education,
				retail, and hospitality) make up a large share alongside trade and
				logistics, while agriculture — once the backbone of the economy — has
				fallen to about 8% of GDP even though it still employs a large share of
				the rural workforce{" "}
				(<Src href="https://en.wikipedia.org/wiki/Economy_of_Thailand">
					Wikipedia — Economy of Thailand
				</Src>). Key exports include electronics, automobiles and auto parts,
				machinery, and agricultural commodities such as rice and rubber, and
				exports overall account for more than half of GDP{" "}
				(<Src href="https://en.wikipedia.org/wiki/Economy_of_Thailand">
					Wikipedia — Economy of Thailand
				</Src>). <strong>Tourism</strong> is a pillar of the services economy,
				historically contributing well over 10% of GDP in peak years and drawing
				around 35–40 million visitors annually before recent softness tied to
				fewer Chinese arrivals{" "}
				(<Src href="https://www.q-files.com/geography/asia/thailand/print">Q-files</Src>;{" "}
				<Src href="https://www.worldbank.org/en/country/thailand/publication/thailand-economic-monitor-february-2025-unleashing-growth-innovation-smes-and-startups">
					World Bank
				</Src>).
			</p>
			<p>
				Thailand reached upper-middle-income status in 2011, and the national
				poverty rate fell dramatically from 42.5% in 2000 to roughly 6–8% in
				recent years, though growth has lagged regional peers{" "}
				(<Src href="https://www.worldbank.org/ext/en/country/thailand">
					World Bank
				</Src>). GDP growth was 2.5% in 2024, with the World Bank projecting a
				further slowdown to around 1.7–1.8% in 2025–2026 amid weak exports, soft
				tourism recovery, high household debt, and global trade uncertainty —
				meaning Thailand is not currently on track to reach high-income status by
				its 2037 target{" "}
				(<Src href="https://www.worldbank.org/ext/en/country/thailand">
					World Bank
				</Src>). On the monetary side, inflation has stayed unusually low or
				negative through 2025, giving the Bank of Thailand room to cut its policy
				rate to support demand{" "}
				(<Src href="https://openknowledge.worldbank.org/entities/publication/3e61db71-0b89-4cec-9f72-e6305558accd">
					World Bank
				</Src>).
			</p>

			<h3 className="article-heading">People, Language &amp; Religion</h3>
			<p>
				Thailand's population is majority ethnic Thai, with significant
				Thai-Chinese, Malay, and various hill-tribe and minority communities,
				particularly in the north and the Muslim-majority far south{" "}
				(<Src href="https://www.q-files.com/geography/asia/thailand/print">Q-files</Src>).
				Thai is the official language, but regional languages — including Isan
				(Lao), Northern Thai (Kham Mueang), Southern Thai, and Malay — are widely
				spoken at home, alongside Chinese dialects among the Thai-Chinese
				community{" "}
				(<Src href="https://www.cia.gov/the-world-factbook/about/archives/2022/countries/thailand/summaries">
					CIA World Factbook archive
				</Src>). Theravada Buddhism is the majority religion at roughly 93–94% of
				the population, with Islam practiced by about 5%, concentrated in the
				southern border provinces, and small Christian and other minorities
				making up the rest{" "}
				(<Src href="https://www.q-files.com/geography/asia/thailand/print">Q-files</Src>).
			</p>

			<h3 className="article-heading">Explore in depth</h3>
			<p>
				This page is the entry point for learnthai.io's Thailand knowledge base.
				Each section above opens into a set of dedicated deep-dive articles —
				27 in all, across five areas. Pick a category to start reading.
			</p>
			<div className="lobby-cards about-category-grid">
				{thailandCategories.map((cat) => (
					<LobbyCard
						key={cat.id}
						glyph={cat.glyph}
						title={cat.label}
						sub={cat.blurb}
						accent="jungle"
						onClick={() => onNavigate(categoryViewId(cat.id))}
					/>
				))}
			</div>

			<p className="article-footnote">
				Note: the CIA World Factbook, historically a primary reference for
				country data, officially sunset in early 2026, so newer figures above draw
				on the World Bank, Wikipedia, Britannica, and other current sources;
				archived Factbook pages were used for background geography and history
				data that remains stable over time.
			</p>
		</article>
	);
}

export default AboutThailand;
