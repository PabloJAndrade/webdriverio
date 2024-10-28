import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

interface CreditCard {
  number: string;
  cvv: string;
  expiry: string;
}
const creditCards: CreditCard[] = [
  {'number': '4071203708084864', 'expiry': '03/28', 'cvv': '934'},
  {'number': '4621361315702891', 'expiry': '01/26', 'cvv': '586'},
  {'number': '4511527404949477', 'expiry': '07/29', 'cvv': '309'},
  {'number': '4666998282466970', 'expiry': '02/30', 'cvv': '965'},
  {'number': '4839330198119992', 'expiry': '02/27', 'cvv': '569'},
  {'number': '4037677465767436', 'expiry': '10/25', 'cvv': '696'},
  {'number': '4516132206968729', 'expiry': '06/30', 'cvv': '124'},
  {'number': '4138188406004556', 'expiry': '05/28', 'cvv': '891'},
  {'number': '4348048605085663', 'expiry': '04/27', 'cvv': '441'},
  {'number': '4053011620972054', 'expiry': '12/27', 'cvv': '135'},
  {'number': '4100340941628282', 'expiry': '02/29', 'cvv': '779'},
  {'number': '4408171155524738', 'expiry': '12/25', 'cvv': '799'},
  {'number': '4945190069299484', 'expiry': '10/28', 'cvv': '370'},
  {'number': '4429138964238136', 'expiry': '10/30', 'cvv': '970'},
  {'number': '4486218868234405', 'expiry': '05/28', 'cvv': '968'},
  {'number': '4362250444116110', 'expiry': '09/25', 'cvv': '242'},
  {'number': '4362039330046667', 'expiry': '05/30', 'cvv': '412'},
  {'number': '4878603508108752', 'expiry': '10/29', 'cvv': '435'},
  {'number': '4685440780811172', 'expiry': '02/27', 'cvv': '621'},
  {'number': '4136666671678768', 'expiry': '02/25', 'cvv': '682'},
  {'number': '4896203219977302', 'expiry': '10/29', 'cvv': '973'},
  {'number': '4526390025240971', 'expiry': '11/30', 'cvv': '781'},
  {'number': '4747542645920340', 'expiry': '05/29', 'cvv': '579'},
  {'number': '4327418756969616', 'expiry': '11/25', 'cvv': '637'},
  {'number': '4289026760913763', 'expiry': '11/30', 'cvv': '891'},
  {'number': '4168616486765731', 'expiry': '05/30', 'cvv': '948'},
  {'number': '4862290792979359', 'expiry': '05/28', 'cvv': '799'},
  {'number': '4954314650011748', 'expiry': '05/30', 'cvv': '479'},
  {'number': '4112150939735890', 'expiry': '01/26', 'cvv': '445'},
  {'number': '4611995122553948', 'expiry': '09/25', 'cvv': '642'},
  {'number': '4639517987439126', 'expiry': '04/29', 'cvv': '164'},
  {'number': '4657936037789677', 'expiry': '02/26', 'cvv': '960'},
  {'number': '4789138991270023', 'expiry': '07/30', 'cvv': '271'},
  {'number': '4627600065672182', 'expiry': '09/25', 'cvv': '667'},
  {'number': '4760922408030515', 'expiry': '09/27', 'cvv': '280'},
  {'number': '4380671474024809', 'expiry': '12/28', 'cvv': '310'},
  {'number': '4565954333491998', 'expiry': '01/26', 'cvv': '644'},
  {'number': '4025709478722019', 'expiry': '08/26', 'cvv': '872'},
  {'number': '4011745874983140', 'expiry': '04/30', 'cvv': '979'},
  {'number': '4042688810090427', 'expiry': '08/27', 'cvv': '967'}
  // Outros cartões...a
];

// Caminho do arquivo onde o índice será salvo
const __dirname = dirname(fileURLToPath(import.meta.url));

const indexFilePath = path.join(__dirname, './cardIndex.json');
function getCurrentCardIndex(): number {
  if (!fs.existsSync(indexFilePath)) {
    // Se o arquivo não existir, crie com o índice 0
    fs.writeFileSync(indexFilePath, JSON.stringify({ index: 0 }));
    return 0;
  }

  const data = fs.readFileSync(indexFilePath, 'utf-8');
  const { index } = JSON.parse(data);
  return index;
}

// Função para salvar o próximo índice no arquivo JSON
function saveNextCardIndex(index: number) {
  fs.writeFileSync(indexFilePath, JSON.stringify({ index }));
}

// Função para obter o próximo cartão de crédito
export function getNextCreditCard(): CreditCard {
  let currentCardIndex = getCurrentCardIndex();
  const card = creditCards[currentCardIndex];
  currentCardIndex = (currentCardIndex + 1) % creditCards.length;

  // Salvar o novo índice no arquivo JSON
  saveNextCardIndex(currentCardIndex);

  return card;
}