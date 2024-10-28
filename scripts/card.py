import random

# Função para calcular o checksum de Luhn e verificar se o cartão é válido
def luhn_checksum(card_number):
    def digits_of(n):
        return [int(d) for d in str(n)]
    digits = digits_of(card_number)
    odd_digits = digits[-1::-2]
    even_digits = digits[-2::-2]
    checksum = sum(odd_digits)
    for d in even_digits:
        checksum += sum(digits_of(d * 2))
    return checksum % 10

# Função para gerar o número do cartão usando o algoritmo de Luhn
def generate_card_number(prefix, length):
    card_number = [int(x) for x in prefix]
    while len(card_number) < (length - 1):
        card_number.append(random.randint(0, 9))
    check_digit = luhn_checksum(int(''.join(map(str, card_number))) * 10)
    card_number.append((10 - check_digit) % 10)
    return ''.join(map(str, card_number))

# Função para gerar a data de expiração (entre 2025 e 2030)
def generate_expiry_date():
    month = random.randint(1, 12)
    year = random.randint(25, 30)  # Expiry year between 2025 and 2030
    return f"{month:02d}/{year}"

# Função para gerar CVV aleatório
def generate_cvv():
    return f"{random.randint(100, 999)}"

# Função para gerar múltiplos cartões válidos
def generate_cards(quantity):
    cards = []
    for _ in range(quantity):
        card_number = generate_card_number("4", 16)  # Visa cards start with 4
        expiry = generate_expiry_date()
        cvv = generate_cvv()
        cards.append({"number": card_number, "expiry": expiry, "cvv": cvv})
    return cards

# Gerar 40 cartões válidos
cards = generate_cards(40)
for card in cards:
    print(card)
