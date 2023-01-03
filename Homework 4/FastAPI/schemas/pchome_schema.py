def pchome_serializer(pchome) -> dict:
    return {
        "_id": str(pchome["_id"]),
        "prod_name": pchome["name"],
        "prod_price": pchome["price"],
        "prod_originPrice": pchome["originPrice"]
    }

def pchomes_serializer(pchomes) -> list:
    return [pchome_serializer(pchome) for pchome in pchomes]