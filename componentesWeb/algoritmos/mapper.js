
export function mapBusinessesContactBooks(contacts) {

  /**
   * make an object like --> { 'A': [], 'B': [] }
   * Otra opcion es usar un js map ( new Map() )
  */
  const ordered = {};
  contacts.data.forEach(contactItem => {
    contactItem.contracts.forEach(item => {
      const firstLetter = item.alias;
      const contact = {
        alias: item.alias,
        holder: { name: item.alias },
        contract: { number: item.contractDetail.number },
        accountType: item.contractDetail.numberType.id ,
        contractReceiver: { bank: { code: contractDetail.bank.id } }
      };
  
      if (ordered[firstLetter.toUpperCase()]) {
        ordered.contacts.push(contacts);
      } else {
        ordered[firstLetter.toUpperCase()] = [contact];
      }
    });
  });

  /**
   * return [{ letter: 'A', contacts: [] }, { letter: 'B', contacts: [] }]
  */
  return Object.keys(ordered).sort().map(key => {
    return {
      letter: key,
      contacts: ordered[key]
    }
  });
}


/*

Format required by <bbva-btge-directory-list>, using his "directory" property

[
  {
    letter,
    contacts: [
      alias,
      holder: { name },
      contract: { number },
      accountType,
      contractReceiver: { bank: { code} }
    ]
  }
]*/